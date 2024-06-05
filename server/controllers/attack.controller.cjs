const loggerUtil = require('../utils/logger.util.cjs');
const attackService = require('../services/attack.service.cjs');

const attackController = {
    handleAttack: async (req, res) => {
        try {
            const attackData = req.body;

            await attackService.processAttack(attackData);
            
            res.status(200).json({ message: 'Attack processed successfully' });
        } catch (error) {
            loggerUtil.logError('Error handling attack:', error);
            res.status(500).json({ message: 'Error handling attack' });
        }
    }
};

module.exports = attackController;
