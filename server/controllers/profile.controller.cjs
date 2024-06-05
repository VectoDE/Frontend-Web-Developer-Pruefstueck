const loggerUtil = require('../utils/logger.util.cjs');
const Profile = require('../models/profile.model.cjs');

const profileController = {
    createProfile: async (req, res) => {
        try {
            const { userId, username, email } = req.body;
            const newProfile = new Profile({ userId, username, email });
            const savedProfile = await newProfile.save();
            res.status(201).json(savedProfile);
        } catch (error) {
            loggerUtil.logError('Error creating profile:', error);
            res.status(500).json({ message: 'Error creating profile' });
        }
    },

    getProfiles: async (req, res) => {
        try {
            const profiles = await Profile.find();
            res.status(200).json(profiles);
        } catch (error) {
            loggerUtil.logError('Error getting profiles:', error);
            res.status(500).json({ message: 'Error getting profiles' });
        }
    },

    getProfileById: async (req, res) => {
        try {
            const profileId = req.params.id;
            const profile = await Profile.findById(profileId);
            if (!profile) {
                return res.status(404).json({ message: 'Profile not found' });
            }
            res.status(200).json(profile);
        } catch (error) {
            loggerUtil.logError('Error getting profile:', error);
            res.status(500).json({ message: 'Error getting profile' });
        }
    },

    updateProfile: async (req, res) => {
        try {
            const profileId = req.params.id;
            const { username, email } = req.body;
            const updatedProfile = await Profile.findByIdAndUpdate(profileId, { username, email }, { new: true });
            if (!updatedProfile) {
                return res.status(404).json({ message: 'Profile not found' });
            }
            res.status(200).json(updatedProfile);
        } catch (error) {
            loggerUtil.logError('Error updating profile:', error);
            res.status(500).json({ message: 'Error updating profile' });
        }
    },

    deleteProfile: async (req, res) => {
        try {
            const profileId = req.params.id;
            const deletedProfile = await Profile.findByIdAndDelete(profileId);
            if (!deletedProfile) {
                return res.status(404).json({ message: 'Profile not found' });
            }
            res.status(200).json({ message: 'Profile deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting profile:', error);
            res.status(500).json({ message: 'Error deleting profile' });
        }
    }
};

module.exports = profileController;
