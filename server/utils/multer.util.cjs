const multer = require('multer');
const fileConfig = require('../config/file.config.cjs');

const storage = multer.diskStorage({
    destination: fileConfig.uploadDirectory,
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
