const loggerUtil = require('../utils/logger.util.cjs');
const analyticsService = require('../services/analytics.service.cjs');

const analyticsController = {
    trackEvent: async (req, res) => {
        try {
            const eventData = req.body;

            await analyticsService.trackEvent(eventData);
            
            res.status(200).json({ message: 'Event tracked successfully' });
        } catch (error) {
            loggerUtil.logError('Error tracking event:', error);
            res.status(500).json({ message: 'Error tracking event' });
        }
    }
};

module.exports = analyticsController;
