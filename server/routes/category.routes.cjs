const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/', categoryController.createCategory);

router.get('/', categoryController.getCategories);

router.get('/:id', categoryController.getCategoryById);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
