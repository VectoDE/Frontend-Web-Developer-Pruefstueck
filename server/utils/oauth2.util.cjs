const { OAuth2Client } = require('google-auth-library');
const appleAuth = require('apple-auth');
const { Octokit } = require('@octokit/rest');
const authConfig = require('../config/auth.config.cjs');

const oauth2Util = {
    getGoogleClient: () => {
        const { googleClientId, googleClientSecret, googleRedirectUri } = authConfig;

        const client = new OAuth2Client(googleClientId, googleClientSecret, googleRedirectUri);
        return client;
    },

    getAppleClient: () => {
        const { appleClientId, appleTeamId, appleKeyIdentifier, applePrivateKeyPath, appleRedirectUri } = authConfig;

        const auth = new appleAuth.Auth({
            clientId: appleClientId,
            teamId: appleTeamId,
            keyIdentifier: appleKeyIdentifier,
            privateKeyPath: applePrivateKeyPath,
            redirectUri: appleRedirectUri
        });

        return auth;
    },

    getGitHubClient: () => {
        const { githubAccessToken } = authConfig;

        const octokit = new Octokit({
            auth: githubAccessToken
        });

        return octokit;
    }
};

module.exports = oauth2Util;
