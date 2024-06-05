const loggerUtil = require('../utils/logger.util.cjs');
const Partnership = require('../models/partnership.model.cjs');
const uploadService = require('../services/upload.service.cjs');

const partnershipController = {
    createPartnership: async (req, res) => {
        try {
            const { name, description } = req.body;
            const { file } = req;
            const imageUrl = await uploadService.uploadFile(file); // Hochladen des Partner-Banners
            const newPartnership = new Partnership({ name, description, imageUrl });
            const savedPartnership = await newPartnership.save();
            res.status(201).json(savedPartnership);
        } catch (error) {
            loggerUtil.logError('Error creating partnership:', error);
            res.status(500).json({ message: 'Error creating partnership' });
        }
    },

    getPartnerships: async (req, res) => {
        try {
            const partnerships = await Partnership.find();
            res.status(200).json(partnerships);
        } catch (error) {
            loggerUtil.logError('Error getting partnerships:', error);
            res.status(500).json({ message: 'Error getting partnerships' });
        }
    },

    getPartnershipById: async (req, res) => {
        try {
            const partnershipId = req.params.id;
            const partnership = await Partnership.findById(partnershipId);
            if (!partnership) {
                return res.status(404).json({ message: 'Partnership not found' });
            }
            res.status(200).json(partnership);
        } catch (error) {
            loggerUtil.logError('Error getting partnership:', error);
            res.status(500).json({ message: 'Error getting partnership' });
        }
    },

    updatePartnership: async (req, res) => {
        try {
            const partnershipId = req.params.id;
            const { name, description } = req.body;
            const { file } = req;
            let updatedPartnershipData = { name, description };
            if (file) {
                updatedPartnershipData.imageUrl = await uploadService.uploadFile(file); // Hochladen des aktualisierten Partner-Banners
            }
            const updatedPartnership = await Partnership.findByIdAndUpdate(partnershipId, updatedPartnershipData, { new: true });
            if (!updatedPartnership) {
                return res.status(404).json({ message: 'Partnership not found' });
            }
            res.status(200).json(updatedPartnership);
        } catch (error) {
            loggerUtil.logError('Error updating partnership:', error);
            res.status(500).json({ message: 'Error updating partnership' });
        }
    },

    deletePartnership: async (req, res) => {
        try {
            const partnershipId = req.params.id;
            const deletedPartnership = await Partnership.findByIdAndDelete(partnershipId);
            if (!deletedPartnership) {
                return res.status(404).json({ message: 'Partnership not found' });
            }
            res.status(200).json({ message: 'Partnership deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting partnership:', error);
            res.status(500).json({ message: 'Error deleting partnership' });
        }
    }
};

module.exports = partnershipController;
