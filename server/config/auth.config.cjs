module.exports = {
    jwtSecretKey: 'yourJwtSecretKey',
    jwtExpiresIn: '1h',
    verificationTokenExpiresIn: '24h',
    bcryptSaltRounds: 10,
    oauth2: {
        google: {
            clientId: 'yourGoogleClientId',
            clientSecret: 'yourGoogleClientSecret'
        },
        facebook: {
            clientId: 'yourFacebookClientId',
            clientSecret: 'yourFacebookClientSecret'
        },
        apple: {
            clientId: 'yourAppleClientId',
            teamId: 'yourAppleTeamId',
            keyId: 'yourAppleKeyId',
            privateKeyPath: 'path/to/your/apple/private/key.p8'
        },
        github: {
            clientId: 'yourGitHubClientId',
            clientSecret: 'yourGitHubClientSecret'
        }
    }
};
