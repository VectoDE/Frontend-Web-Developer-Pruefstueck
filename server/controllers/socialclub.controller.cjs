const loggerUtil = require('../utils/logger.util.cjs');
const SocialClub = require('../models/socialclub.model.cjs');

const socialClubController = {
    createSocialClub: async (req, res) => {
        try {
            const { name, description } = req.body;
            const newSocialClub = new SocialClub({ name, description });
            const savedSocialClub = await newSocialClub.save();
            res.status(201).json(savedSocialClub);
        } catch (error) {
            loggerUtil.logError('Error creating social club:', error);
            res.status(500).json({ message: 'Error creating social club' });
        }
    },

    getSocialClubs: async (req, res) => {
        try {
            const socialClubs = await SocialClub.find();
            res.status(200).json(socialClubs);
        } catch (error) {
            loggerUtil.logError('Error getting social clubs:', error);
            res.status(500).json({ message: 'Error getting social clubs' });
        }
    },

    getSocialClubById: async (req, res) => {
        try {
            const socialClubId = req.params.id;
            const socialClub = await SocialClub.findById(socialClubId);
            if (!socialClub) {
                return res.status(404).json({ message: 'Social club not found' });
            }
            res.status(200).json(socialClub);
        } catch (error) {
            loggerUtil.logError('Error getting social club:', error);
            res.status(500).json({ message: 'Error getting social club' });
        }
    },

    updateSocialClub: async (req, res) => {
        try {
            const socialClubId = req.params.id;
            const { name, description } = req.body;
            const updatedSocialClub = await SocialClub.findByIdAndUpdate(socialClubId, { name, description }, { new: true });
            if (!updatedSocialClub) {
                return res.status(404).json({ message: 'Social club not found' });
            }
            res.status(200).json(updatedSocialClub);
        } catch (error) {
            loggerUtil.logError('Error updating social club:', error);
            res.status(500).json({ message: 'Error updating social club' });
        }
    },

    deleteSocialClub: async (req, res) => {
        try {
            const socialClubId = req.params.id;
            const deletedSocialClub = await SocialClub.findByIdAndDelete(socialClubId);
            if (!deletedSocialClub) {
                return res.status(404).json({ message: 'Social club not found' });
            }
            res.status(200).json({ message: 'Social club deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting social club:', error);
            res.status(500).json({ message: 'Error deleting social club' });
        }
    }
};

module.exports = socialClubController;
