const twilio = require('twilio');
const loggerUtil = require('../utils/logger.util.cjs');

const smsService = {
    configureClient: () => {
        const client = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');
        return client;
    },

    sendSMS: async (to, message) => {
        try {
            const client = smsService.configureClient();

            const response = await client.messages.create({
                body: message,
                to: to,
                from: 'YOUR_TWILIO_PHONE_NUMBER'
            });

            loggerUtil.logInfo('SMS sent:', response.sid);
        } catch (error) {
            loggerUtil.logError('Error sending SMS:', error);
            throw error;
        }
    }
};

module.exports = smsService;
