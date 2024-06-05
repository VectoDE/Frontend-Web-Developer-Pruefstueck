const oauth2Util = require('../utils/oauth2.util.cjs');
const googleApiUtil = require('../utils/googleapi.util.cjs');

const analyticsService = {
    // Authentifiziere mit Google OAuth2
    authenticateWithGoogle: async () => {
        try {
            const authClient = oauth2Util.getGoogleClient();
            const authUrl = authClient.generateAuthUrl({
                access_type: 'offline',
                scope: 'https://www.googleapis.com/auth/analytics.readonly'
            });
            console.log('Authorize this app by visiting this URL:', authUrl);
        } catch (error) {
            console.error('Error authenticating with Google:', error);
            throw error;
        }
    },

    getAnalyticsData: async (viewId, startDate, endDate) => {
        try {
            const authClient = oauth2Util.getGoogleClient();
            const tokens = await oauth2Util.getGoogleTokens();
            authClient.setCredentials(tokens);

            const analytics = googleApiUtil.getAnalyticsClient(authClient);
            const response = await analytics.data.ga.get({
                'auth': authClient,
                'ids': `ga:${viewId}`,
                'start-date': startDate,
                'end-date': endDate,
                'metrics': 'ga:sessions'
            });

            return response.data;
        } catch (error) {
            console.error('Error fetching analytics data:', error);
            throw error;
        }
    }
};

module.exports = analyticsService;
