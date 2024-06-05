const jwt = require('jsonwebtoken');
const fs = require('fs');
const authConfig = require('../config/auth.config.cjs');

const jwtUtil = {
    generateToken: async (payload, options = {}) => {
        try {
            const { privateKeyPath } = authConfig;
            const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
            const token = jwt.sign(payload, privateKey, options);
            return token;
        } catch (error) {
            console.error('Error generating JWT:', error);
            throw error;
        }
    },

    verifyToken: async (token, options = {}) => {
        try {
            const { publicKeyPath } = authConfig;
            const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
            const decoded = jwt.verify(token, publicKey, options);
            return decoded;
        } catch (error) {
            console.error('Error verifying JWT:', error);
            throw error;
        }
    },

    decodeToken: async (token) => {
        try {
            const decoded = jwt.decode(token);
            return decoded;
        } catch (error) {
            console.error('Error decoding JWT:', error);
            throw error;
        }
    }
};

module.exports = jwtUtil;
