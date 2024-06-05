const loggerUtil = require('../utils/logger.util.cjs');
const verificationService = require('../services/verification.service.cjs');
const User = require('../models/user.model.cjs');

const verificationController = {
    sendVerificationEmail: async (req, res) => {
        try {
            const { email } = req.body;
            await verificationService.sendVerificationEmail(email);
            res.status(200).json({ message: 'Verification email sent successfully' });
        } catch (error) {
            loggerUtil.logError('Error sending verification email:', error);
            res.status(500).json({ message: 'Error sending verification email' });
        }
    },

    verifyEmail: async (req, res) => {
        try {
            const { email, token } = req.body;
            await verificationService.verifyEmail(email, token);
            await User.findOneAndUpdate({ email: email }, { verified: true });
            res.status(200).json({ message: 'Email verified successfully' });
        } catch (error) {
            loggerUtil.logError('Error verifying email:', error);
            res.status(500).json({ message: 'Error verifying email' });
        }
    }
};

module.exports = verificationController;
