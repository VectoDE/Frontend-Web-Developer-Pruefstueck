const loggerUtil = require('../utils/logger.util.cjs');
const Category = require('../models/category.model.cjs');

const categoryController = {
    createCategory: async (req, res) => {
        try {
            const { name, description } = req.body;
            const newCategory = new Category({ name, description });
            const savedCategory = await newCategory.save();
            res.status(201).json(savedCategory);
        } catch (error) {
            loggerUtil.logError('Error creating category:', error);
            res.status(500).json({ message: 'Error creating category' });
        }
    },
    
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (error) {
            loggerUtil.logError('Error getting categories:', error);
            res.status(500).json({ message: 'Error getting categories' });
        }
    },

    getCategoryById: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const category = await Category.findById(categoryId);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json(category);
        } catch (error) {
            loggerUtil.logError('Error getting category:', error);
            res.status(500).json({ message: 'Error getting category' });
        }
    },

    updateCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const { name, description } = req.body;
            const updatedCategory = await Category.findByIdAndUpdate(categoryId, { name, description }, { new: true });
            if (!updatedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json(updatedCategory);
        } catch (error) {
            loggerUtil.logError('Error updating category:', error);
            res.status(500).json({ message: 'Error updating category' });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const deletedCategory = await Category.findByIdAndDelete(categoryId);
            if (!deletedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.status(200).json({ message: 'Category deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting category:', error);
            res.status(500).json({ message: 'Error deleting category' });
        }
    }
};

module.exports = categoryController;
