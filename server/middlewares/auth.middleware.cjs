const loggerUtil = require('../utils/logger.util.cjs');
const jwtUtil = require('../utils/jwt.util.cjs');

const authMiddleware = {
    authenticateToken: async (req, res, next) => {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            if (!token) {
                loggerUtil.logError('Authentication token not found');
                return res.sendStatus(401);
            }

            const decodedToken = await jwtUtil.verifyToken(token);
            req.user = decodedToken;
            next();
        } catch (error) {
            loggerUtil.logError('Error authenticating token:', error);
            return res.sendStatus(403);
        }
    }
};

module.exports = authMiddleware;
