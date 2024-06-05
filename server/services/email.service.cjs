const nodemailer = require('nodemailer');
const loggerUtil = require('../utils/logger.util.cjs');
const emailConfig = require('../config/email.config.cjs');

const emailService = {
    configureTransporter: () => {
        const transporter = nodemailer.createTransport({
            host: emailConfig.host,
            port: emailConfig.port,
            secure: emailConfig.secure,
            auth: {
                user: emailConfig.auth.user,
                pass: emailConfig.auth.pass
            }
        });
        return transporter;
    },

    sendEmail: async (to, subject, text) => {
        try {
            const transporter = emailService.configureTransporter();

            const info = await transporter.sendMail({
                from: emailConfig.from,
                to: to,
                subject: subject,
                text: text
            });

            loggerUtil.logInfo('Email sent: %s', info.messageId);
        } catch (error) {
            loggerUtil.logError('Error sending email:', error);
            throw error;
        }
    },

    sendVerificationEmail: async (to, verificationLink) => {
        const subject = 'Email Verification';
        const text = `Please click on the following link to verify your email: ${verificationLink}`;
        
        try {
            await emailService.sendEmail(to, subject, text);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = emailService;
