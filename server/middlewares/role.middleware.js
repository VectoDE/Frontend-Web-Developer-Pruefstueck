const loggerUtil = require('../utils/logger.util.cjs');

const roleMiddleware = {
    checkAdminRole: (req, res, next) => {
        try {
            const userRole = req.user.role;
            if (userRole !== 'admin') {
                loggerUtil.logError('Unauthorized access: Admin role required');
                return res.status(403).json({ message: 'Unauthorized access: Admin role required' });
            }
            next();
        } catch (error) {
            loggerUtil.logError('Error checking admin role:', error);
            return res.status(500).json({ message: 'Error checking admin role' });
        }
    }
};

module.exports = roleMiddleware;
