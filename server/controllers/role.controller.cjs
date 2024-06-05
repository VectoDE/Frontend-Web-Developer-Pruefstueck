const loggerUtil = require('../utils/logger.util.cjs');
const Role = require('../models/role.model.cjs');

const roleController = {
    createRole: async (req, res) => {
        try {
            const { name, description } = req.body;
            const newRole = new Role({ name, description });
            const savedRole = await newRole.save();
            res.status(201).json(savedRole);
        } catch (error) {
            loggerUtil.logError('Error creating role:', error);
            res.status(500).json({ message: 'Error creating role' });
        }
    },
    
    getRoles: async (req, res) => {
        try {
            const roles = await Role.find();
            res.status(200).json(roles);
        } catch (error) {
            loggerUtil.logError('Error getting roles:', error);
            res.status(500).json({ message: 'Error getting roles' });
        }
    },

    editRole: async (req, res) => {
        try {
            const roleId = req.params.id;
            const { name, description } = req.body;
            const updatedRole = await Role.findByIdAndUpdate(roleId, { name, description }, { new: true });
            if (!updatedRole) {
                loggerUtil.logError('Role not found');
                return res.status(404).json({ message: 'Role not found' });
            }
            res.status(200).json(updatedRole);
        } catch (error) {
            loggerUtil.logError('Error editing role:', error);
            res.status(500).json({ message: 'Error editing role' });
        }
    },

    deleteRole: async (req, res) => {
        try {
            const roleId = req.params.id;
            const deletedRole = await Role.findByIdAndDelete(roleId);
            if (!deletedRole) {
                loggerUtil.logError('Role not found');
                return res.status(404).json({ message: 'Role not found' });
            }
            res.status(200).json({ message: 'Role deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting role:', error);
            res.status(500).json({ message: 'Error deleting role' });
        }
    }
};

module.exports = roleController;
