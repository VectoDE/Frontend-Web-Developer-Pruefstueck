const loggerUtil = require('../utils/logger.util.cjs');
const uploadService = require('../services/upload.service.cjs');

const fileController = {
    uploadFile: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'File is required' });
            }

            const { filename, path } = req.file;

            res.status(200).json({ filename, path });
        } catch (error) {
            loggerUtil.logError('Error uploading file:', error);
            res.status(500).json({ message: 'Error uploading file' });
        }
    }
};

module.exports = fileController;
