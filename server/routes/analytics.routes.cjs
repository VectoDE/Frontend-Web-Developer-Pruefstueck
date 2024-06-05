const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller.cjs');

router.post('/track', analyticsController.trackEvent);

module.exports = router;
