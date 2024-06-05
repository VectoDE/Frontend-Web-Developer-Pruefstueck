const loggerUtil = require('../utils/logger.util.cjs');
const jwtUtil = require('../utils/jwt.util.cjs');
const bcryptUtil = require('../utils/bcrypt.util.cjs');
const validationUtil = require('../utils/validation.util.cjs');

const verificationService = {
    verifyToken: async (token) => {
        try {
            const decodedToken = await jwtUtil.verifyToken(token);
            loggerUtil.logInfo('Token verified:', decodedToken);
            return decodedToken;
        } catch (error) {
            loggerUtil.logError('Error verifying token:', error);
            throw error;
        }
    },

    verifyPassword: async (plainPassword, hashedPassword) => {
        try {
            const isPasswordValid = await bcryptUtil.comparePasswords(plainPassword, hashedPassword);
            loggerUtil.logInfo('Password verified:', isPasswordValid);
            return isPasswordValid;
        } catch (error) {
            loggerUtil.logError('Error verifying password:', error);
            throw error;
        }
    },

    verifyUserData: (userData) => {
        try {
            const isValidUserData = validationUtil.isValidUserData(userData);
            loggerUtil.logInfo('User data verified:', isValidUserData);
            return isValidUserData;
        } catch (error) {
            loggerUtil.logError('Error verifying user data:', error);
            throw error;
        }
    }
};

module.exports = verificationService;
