const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/send', chatController.sendMessage);

router.get('/:userId', chatController.getMessages);

router.put('/:messageId/edit', chatController.editMessage);

module.exports = router;
