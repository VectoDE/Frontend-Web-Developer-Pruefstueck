const loggerUtil = require('../utils/logger.util.cjs');
const Ticket = require('../models/ticket.model.cjs');

const ticketController = {
    createTicket: async (req, res) => {
        try {
            const { title, description, userId } = req.body;
            const newTicket = new Ticket({ title, description, userId });
            const savedTicket = await newTicket.save();
            res.status(201).json(savedTicket);
        } catch (error) {
            loggerUtil.logError('Error creating ticket:', error);
            res.status(500).json({ message: 'Error creating ticket' });
        }
    },

    getTickets: async (req, res) => {
        try {
            const tickets = await Ticket.find();
            res.status(200).json(tickets);
        } catch (error) {
            loggerUtil.logError('Error getting tickets:', error);
            res.status(500).json({ message: 'Error getting tickets' });
        }
    },

    getTicketById: async (req, res) => {
        try {
            const ticketId = req.params.id;
            const ticket = await Ticket.findById(ticketId);
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            res.status(200).json(ticket);
        } catch (error) {
            loggerUtil.logError('Error getting ticket:', error);
            res.status(500).json({ message: 'Error getting ticket' });
        }
    },

    updateTicket: async (req, res) => {
        try {
            const ticketId = req.params.id;
            const { title, description } = req.body;
            const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, { title, description }, { new: true });
            if (!updatedTicket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            res.status(200).json(updatedTicket);
        } catch (error) {
            loggerUtil.logError('Error updating ticket:', error);
            res.status(500).json({ message: 'Error updating ticket' });
        }
    },

    deleteTicket: async (req, res) => {
        try {
            const ticketId = req.params.id;
            const deletedTicket = await Ticket.findByIdAndDelete(ticketId);
            if (!deletedTicket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            res.status(200).json({ message: 'Ticket deleted successfully' });
        } catch (error) {
            loggerUtil.logError('Error deleting ticket:', error);
            res.status(500).json({ message: 'Error deleting ticket' });
        }
    }
};

module.exports = ticketController;
