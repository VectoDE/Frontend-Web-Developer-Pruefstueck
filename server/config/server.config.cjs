module.exports = {
    environment: process.env.NODE_ENV || 'development',
    version: process.env.VERSION || '1.0.0',
    author: process.env.AUTHOR || 'Vecto. (Tim Hauke)',
    port: process.env.PORT || 3000,
    dbURI: process.env.DB_URI || 'mongodb://localhost:27017/yourdbname',
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    logLevel: process.env.LOG_LEVEL || 'info',
    mail: {
        host: process.env.MAIL_HOST || 'smtp.yourmailhost.com',
        port: process.env.MAIL_PORT || 587,
        secure: process.env.MAIL_SECURE || false,
        auth: {
            user: process.env.MAIL_USER || 'your_email@example.com',
            pass: process.env.MAIL_PASS || 'your_password'
        }
    }
};
