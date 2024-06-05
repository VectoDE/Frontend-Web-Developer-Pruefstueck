const loggerUtil = require('../utils/logger.util.cjs');
const Tag = require('../models/tag.model.cjs');

const tagController = {
    createTag: async (req, res) => {
        try {
            const { name } = req.body;
            const newTag = new Tag({ name });
            const savedTag = await newTag.save();
            res.status(201).json(savedTag);
        } catch (error) {
            loggerUtil.logError('Error creating tag:', error);
            res.status(500).json({ message: 'Error creating tag' });
        }
    },

    getTags: async (req, res) => {
        try {
            const tags = await Tag.find();
            res.status(200).json(tags);
        } catch (error) {
            loggerUtil.logError('Error getting tags:', error);
            res.status(500).json({ message: 'Error getting tags' });
        }
    },

    getTagById: async (req, res) => {
        try {
            const tagId = req.params.id;
            const tag = await Tag.findById(tagId);
            if (!tag) {
                return res.status(404).json({ message: 'Tag not found' });
            }
            res.status(200).json(tag);
        } catch (error) {
            loggerUtil.logError('Error getting tag:', error);
            res.status(500).json({ message: 'Error getting tag' });
        }
    },

    updateTag: async (req, res) => {
        try {
            const tagId = req.params.id;
            const { name } = req.body;
            const updatedTag = await Tag.findByIdAndUpdate(tagId, { name }, { new: true });
            if (!updatedTag) {
                return res.status(404).json({ message: 'Tag not found' });
            }
            res.status(200).json(updatedTag);
        } catch (error) {
            loggerUtil.logError('Error updating tag:', error);
            res.status(500).json({ message: 'Error updating tag' });
        }
    },

    deleteTag: async (req, res) => {
        try {
            const tagId = req.params.id;
            const deletedTag = await Tag.findByIdAndDelete(tagId);
            if (!deletedTag) {
                return res.status(404).json({ message: 'Tag not found' });
            }
            res.status(200).json({ message: 'Tag deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting tag:', error);
            res.status(500).json({ message: 'Error deleting tag' });
        }
    }
};

module.exports = tagController;
