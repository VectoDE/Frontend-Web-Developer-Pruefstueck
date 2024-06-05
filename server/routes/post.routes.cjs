const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');
const uploadService = require('../services/upload.service.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', uploadService.upload.single('image'), postController.createPost);

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostById);

router.put('/:id/update', postController.updatePost);

router.delete('/:id/delete', postController.deletePost);

module.exports = router;
