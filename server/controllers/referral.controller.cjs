const loggerUtil = require('../utils/logger.util.cjs');
const Referral = require('../models/referral.model.cjs');

const referralController = {
    createReferral: async (req, res) => {
        try {
            const { userId, referralCode } = req.body;
            const newReferral = new Referral({ userId, referralCode });
            const savedReferral = await newReferral.save();
            res.status(201).json(savedReferral);
        } catch (error) {
            loggerUtil.logError('Error creating referral:', error);
            res.status(500).json({ message: 'Error creating referral' });
        }
    },

    getReferrals: async (req, res) => {
        try {
            const referrals = await Referral.find();
            res.status(200).json(referrals);
        } catch (error) {
            loggerUtil.logError('Error getting referrals:', error);
            res.status(500).json({ message: 'Error getting referrals' });
        }
    },

    getReferralById: async (req, res) => {
        try {
            const referralId = req.params.id;
            const referral = await Referral.findById(referralId);
            if (!referral) {
                return res.status(404).json({ message: 'Referral not found' });
            }
            res.status(200).json(referral);
        } catch (error) {
            loggerUtil.logError('Error getting referral:', error);
            res.status(500).json({ message: 'Error getting referral' });
        }
    },

    updateReferral: async (req, res) => {
        try {
            const referralId = req.params.id;
            const { userId, referralCode } = req.body;
            const updatedReferral = await Referral.findByIdAndUpdate(referralId, { userId, referralCode }, { new: true });
            if (!updatedReferral) {
                return res.status(404).json({ message: 'Referral not found' });
            }
            res.status(200).json(updatedReferral);
        } catch (error) {
            loggerUtil.logError('Error updating referral:', error);
            res.status(500).json({ message: 'Error updating referral' });
        }
    },

    deleteReferral: async (req, res) => {
        try {
            const referralId = req.params.id;
            const deletedReferral = await Referral.findByIdAndDelete(referralId);
            if (!deletedReferral) {
                return res.status(404).json({ message: 'Referral not found' });
            }
            res.status(200).json({ message: 'Referral deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting referral:', error);
            res.status(500).json({ message: 'Error deleting referral' });
        }
    }
};

module.exports = referralController;
