const loggerUtil = require('../utils/logger.util.cjs');
const Post = require('../models/post.model.cjs');
const uploadService = require('../services/upload.service.cjs');

const postController = {
    createPost: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'Post image is required' });
            }
            const { filename, path } = req.file;

            const { title, content } = req.body;

            const newPost = new Post({
                title,
                content,
                image: {
                    filename,
                    path
                }
            });

            const savedPost = await newPost.save();

            res.status(201).json(savedPost);
        } catch (error) {
            loggerUtil.logError('Error creating post:', error);
            res.status(500).json({ message: 'Error creating post' });
        }
    },

    getPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            loggerUtil.logError('Error getting posts:', error);
            res.status(500).json({ message: 'Error getting posts' });
        }
    },

    getPostById: async (req, res) => {
        try {
            const postId = req.params.id;
            const post = await Post.findById(postId);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            loggerUtil.logError('Error getting post:', error);
            res.status(500).json({ message: 'Error getting post' });
        }
    },

    updatePost: async (req, res) => {
        try {
            const postId = req.params.id;
            const { title, content } = req.body;
            const updatedPost = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(updatedPost);
        } catch (error) {
            loggerUtil.logError('Error updating post:', error);
            res.status(500).json({ message: 'Error updating post' });
        }
    },

    deletePost: async (req, res) => {
        try {
            const postId = req.params.id;
            const deletedPost = await Post.findByIdAndDelete(postId);
            if (!deletedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting post:', error);
            res.status(500).json({ message: 'Error deleting post' });
        }
    }
};

module.exports = postController;
