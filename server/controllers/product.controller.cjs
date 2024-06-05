const loggerUtil = require('../utils/logger.util.cjs');
const Product = require('../models/product.model.cjs');
const uploadService = require('../services/upload.service.cjs');

const productController = {
    createProduct: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'Product image is required' });
            }

            const { filename, path } = req.file;

            const { name, description, price } = req.body;

            const newProduct = new Product({
                name,
                description,
                price,
                image: {
                    filename,
                    path
                }
            });

            const savedProduct = await newProduct.save();

            res.status(201).json(savedProduct);
        } catch (error) {
            loggerUtil.logError('Error creating product:', error);
            res.status(500).json({ message: 'Error creating product' });
        }
    },

    getProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            loggerUtil.logError('Error getting products:', error);
            res.status(500).json({ message: 'Error getting products' });
        }
    },

    getProductById: async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            loggerUtil.logError('Error getting product:', error);
            res.status(500).json({ message: 'Error getting product' });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const { name, description, price } = req.body;
            const updatedProduct = await Product.findByIdAndUpdate(productId, { name, description, price }, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            loggerUtil.logError('Error updating product:', error);
            res.status(500).json({ message: 'Error updating product' });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting product:', error);
            res.status(500).json({ message: 'Error deleting product' });
        }
    }
};

module.exports = productController;
