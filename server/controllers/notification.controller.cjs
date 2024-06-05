const loggerUtil = require('../utils/logger.util.cjs');
const notificationService = require('../services/notification.service.cjs');

const notificationController = {
    sendNotification: async (req, res) => {
        try {
            const { userId, message } = req.body;
            await notificationService.sendNotification(userId, message);
            res.status(200).json({ message: 'Notification sent successfully' });
        } catch (error) {
            loggerUtil.logError('Error sending notification:', error);
            res.status(500).json({ message: 'Error sending notification' });
        }
    }
};

module.exports = notificationController;
