const loggerUtil = require('../utils/logger.util.cjs');
const oauth2Util = require('../utils/oauth2.util.cjs');

const oauth2Middleware = {
    authenticateOAuth2Token: async (req, res, next) => {
        try {
            const accessToken = req.headers['authorization'];
            if (!accessToken) {
                loggerUtil.logError('Access token not found');
                return res.sendStatus(401);
            }

            const tokenInfo = await oauth2Util.verifyAccessToken(accessToken);
            if (!tokenInfo || !tokenInfo.active) {
                loggerUtil.logError('Invalid access token');
                return res.sendStatus(401);
            }

            req.user = tokenInfo;
            next();
        } catch (error) {
            loggerUtil.logError('Error authenticating OAuth2 token:', error);
            return res.sendStatus(403);
        }
    }
};

module.exports = oauth2Middleware;
