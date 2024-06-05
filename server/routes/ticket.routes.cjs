const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', ticketController.createTicket);

router.get('/', ticketController.getTickets);

router.get('/:id', ticketController.getTicketById);

router.put('/:id/update', ticketController.updateTicket);

router.delete('/:id/delete', ticketController.deleteTicket);

module.exports = router;
