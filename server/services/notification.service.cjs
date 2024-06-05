const loggerUtil = require('../utils/logger.util.cjs');
const emailService = require('./email.service.cjs');
const smsService = require('./sms.service.cjs');

const notificationService = {
    sendAdminNotification: async (message) => {
        try {
            loggerUtil.logInfo(`Sending admin notification: ${message}`);

            await emailService.sendEmail('admin@example.com', 'Admin Notification', message);
            
            await smsService.sendSMS('+1234567890', message);
        } catch (error) {
            loggerUtil.logError('Error sending admin notification:', error);
            throw error;
        }
    }
};

module.exports = notificationService;
