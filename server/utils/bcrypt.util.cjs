const bcrypt = require('bcrypt');

const bcryptUtil = {
    hashPassword: async (password) => {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw error;
        }
    },

    comparePassword: async (password, hashedPassword) => {
        try {
            const match = await bcrypt.compare(password, hashedPassword);
            return match;
        } catch (error) {
            console.error('Error comparing passwords:', error);
            throw error;
        }
    }
};

module.exports = bcryptUtil;
