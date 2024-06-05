const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/paypal', paymentController.processPaypalPayment);

router.post('/stripe', paymentController.processStripePayment);

router.post('/googlepay', paymentController.processGooglePayPayment);

router.post('/applepay', paymentController.processApplePayPayment);

module.exports = router;
