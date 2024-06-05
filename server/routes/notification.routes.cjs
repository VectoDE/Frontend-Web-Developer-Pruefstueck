const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/', notificationController.sendNotification);

module.exports = router;
