module.exports = {
    storagePath: 'uploads/',
    maxFileSize: 2 * 1024 * 1024,
    allowedFileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    multer: {
        storage: {
            destination: function (req, file, cb) {
                cb(null, 'uploads/');
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
            }
        },
        limits: {
            fileSize: 2 * 1024 * 1024 // 2 MB
        },
        fileFilter: function (req, file, cb) {
            if (['image/jpeg', 'image/png', 'application/pdf'].includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type'), false);
            }
        }
    }
};
