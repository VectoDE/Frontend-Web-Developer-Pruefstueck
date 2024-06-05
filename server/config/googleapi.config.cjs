module.exports = {
    clientId: 'yourGoogleClientId', // Google Client ID
    clientSecret: 'yourGoogleClientSecret', // Google Client Secret
    redirectUri: 'yourRedirectUri', // Redirect URI für OAuth 2.0
    scopes: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        // Fügen Sie bei Bedarf weitere Scopes hinzu
    ],
    projectId: 'yourProjectId', // Google Cloud Project ID
    authUri: 'https://accounts.google.com/o/oauth2/auth',
    tokenUri: 'https://oauth2.googleapis.com/token',
    authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
    clientSecretJson: {
        web: {
            client_id: 'yourGoogleClientId',
            project_id: 'yourProjectId',
            auth_uri: 'https://accounts.google.com/o/oauth2/auth',
            token_uri: 'https://oauth2.googleapis.com/token',
            auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
            client_secret: 'yourGoogleClientSecret',
            redirect_uris: [
                'yourRedirectUri'
            ]
        }
    }
};
