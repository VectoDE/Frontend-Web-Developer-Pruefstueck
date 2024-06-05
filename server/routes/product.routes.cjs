const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', productController.createProduct);

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.put('/:id/update', productController.updateProduct);

router.delete('/:id/delete', productController.deleteProduct);

module.exports = router;
