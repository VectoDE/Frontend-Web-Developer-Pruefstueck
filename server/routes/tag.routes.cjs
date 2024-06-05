const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', tagController.createTag);

router.get('/', tagController.getTags);

router.get('/:id', tagController.getTagById);

router.put('/:id/update', tagController.updateTag);

router.delete('/:id/delete', tagController.deleteTag);

module.exports = router;
