const loggerUtil = require('../utils/logger.util.cjs');
const User = require('../models/user.model.cjs');
const jwtUtil = require('../utils/jwt.util.cjs');
const bcryptUtil = require('../utils/bcrypt.util.cjs');
const emailService = require('../services/email.service.cjs');
const authConfig = require('../config/auth.config.cjs');

const authController = {
    register: async (req, res) => {
        try {
            const { email, password } = req.body;
            
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            const hashedPassword = await bcryptUtil.hash(password);
            const newUser = new User({ email, password: hashedPassword });
            await newUser.save();

            const token = jwtUtil.sign({ userId: newUser._id }, authConfig.jwtSecretKey, { expiresIn: authConfig.jwtExpiresIn });

            const verificationToken = jwtUtil.sign({ userId: newUser._id }, authConfig.jwtSecretKey, { expiresIn: authConfig.verificationTokenExpiresIn });
            const verificationLink = `${authConfig.emailVerificationURL}${verificationToken}`;

            await emailService.sendVerificationEmail(newUser.email, verificationLink);

            res.status(201).json({ token, message: 'User registered successfully. Please verify your email.' });
        } catch (error) {
            loggerUtil.logError('Error registering user:', error);
            res.status(500).json({ message: 'Error registering user' });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const isPasswordValid = await bcryptUtil.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const token = jwtUtil.sign({ userId: user._id }, authConfig.jwtSecret, { expiresIn: authConfig.jwtExpiresIn });

            res.status(200).json({ token });
        } catch (error) {
            loggerUtil.logError('Error logging in:', error);
            res.status(500).json({ message: 'Error logging in' });
        }
    }
};

module.exports = authController;
