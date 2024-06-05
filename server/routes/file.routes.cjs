const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file.controller.cjs');
const uploadService = require('../services/upload.service.cjs');

router.post('/upload', uploadService.upload.single('file'), fileController.uploadFile);

module.exports = router;
