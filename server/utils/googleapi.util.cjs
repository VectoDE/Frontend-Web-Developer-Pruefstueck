const { google } = require('googleapis');
const fs = require('fs');
const config = require('../config/googleapi.config.cjs');

const googleApiUtil = {
    getOAuthClient: async () => {
        try {
            const { clientId, clientSecret, redirectUri, scopes } = config;
            const oAuth2Client = new google.auth.OAuth2(
                clientId, clientSecret, redirectUri);

            const tokenPath = config.tokenPath;
            if (fs.existsSync(tokenPath)) {
                const token = JSON.parse(fs.readFileSync(tokenPath));
                oAuth2Client.setCredentials(token);
            }

            return oAuth2Client;
        } catch (error) {
            console.error('Error getting OAuth client:', error);
            throw error;
        }
    },

    generateAuthUrl: async (oAuthClient) => {
        try {
            const { scopes } = config;
            const authUrl = oAuthClient.generateAuthUrl({
                access_type: 'offline',
                scope: scopes,
            });
            return authUrl;
        } catch (error) {
            console.error('Error generating auth URL:', error);
            throw error;
        }
    },

    getAccessToken: async (oAuthClient, code) => {
        try {
            const { tokens } = await oAuthClient.getToken(code);
            return tokens;
        } catch (error) {
            console.error('Error getting access token:', error);
            throw error;
        }
    }
};

module.exports = googleApiUtil;
