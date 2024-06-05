const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verification.controller.cjs');

router.post('/send', verificationController.sendVerificationEmail);

router.post('/verify', verificationController.verifyEmail);

module.exports = router;
