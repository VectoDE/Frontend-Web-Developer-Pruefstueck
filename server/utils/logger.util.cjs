const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const fs = require('fs');
const path = require('path');
const serverConfig = require('../config/server.config.cjs');

const logsDirectory = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        printf(info => `${info.timestamp} ${info.level}: [${serverConfig.environment}] v${serverConfig.version} - ${serverConfig.author} - ${info.message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.join(logsDirectory, 'error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(logsDirectory, 'combined.log') })
    ]
});

const loggerUtil = {
    logInfo: (message) => {
        logger.info(message);
    },

    logError: (message) => {
        logger.error(message);
    }
};

module.exports = loggerUtil;
