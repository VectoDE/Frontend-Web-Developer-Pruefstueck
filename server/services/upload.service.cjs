const multer = require('multer');
const loggerUtil = require('../utils/logger.util.cjs');
const fileConfig = require('../config/file.config.cjs');
const path = require('path');

const storage = multer.diskStorage({
    destination: fileConfig.multer.storage.destination,
    filename: fileConfig.multer.storage.filename
});

const upload = multer({
    storage: storage,
    limits: fileConfig.multer.limits,
    fileFilter: fileConfig.multer.fileFilter
});

const uploadService = {
    uploadFile: (req, res, next) => {
        upload.single('file')(req, res, (err) => {
            if (err) {
                loggerUtil.logError('Error uploading file:', err);
                return res.status(400).json({ message: 'Error uploading file' });
            }
            next();
        });
    }
};

module.exports = uploadService;
