const loggerUtil = require('../utils/logger.util.cjs');
const bcryptUtil = require('../utils/bcrypt.util.cjs');
const User = require('../models/user.model.cjs');

const userController = {
    createUser: async (req, res) => {
        try {
            const { username, email, password, role } = req.body;
            const hashedPassword = await bcryptUtil.hashPassword(password);
            const newUser = new User({ username, email, password: hashedPassword, role });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            loggerUtil.logError('Error creating user:', error);
            res.status(500).json({ message: 'Error creating user' });
        }
    },
    
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            loggerUtil.logError('Error getting users:', error);
            res.status(500).json({ message: 'Error getting users' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            loggerUtil.logError('Error getting user:', error);
            res.status(500).json({ message: 'Error getting user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const { username, email, password, role } = req.body;
            const hashedPassword = await bcryptUtil.hashPassword(password);
            const updatedUser = await User.findByIdAndUpdate(userId, { username, email, password: hashedPassword, role }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            loggerUtil.logError('Error updating user:', error);
            res.status(500).json({ message: 'Error updating user' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const deletedUser = await User.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting user:', error);
            res.status(500).json({ message: 'Error deleting user' });
        }
    }
};

module.exports = userController;
