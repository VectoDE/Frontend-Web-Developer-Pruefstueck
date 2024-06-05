const loggerUtil = require('../utils/logger.util.cjs');
const paymentConfig = require('../config/payment.config.cjs');
const paypalService = require('../services/paypal.service.cjs');
const stripeService = require('../services/stripe.service.cjs');
const googlePayService = require('../services/googlepay.service.cjs');
const applePayService = require('../services/applepay.service.cjs');

const paymentController = {
    processPaypalPayment: async (req, res) => {
        try {
            const { paypalMode, paypalClientId, paypalClientSecret } = paymentConfig;
            const { amount, currency, description } = req.body;

            const paymentResult = await paypalService.processPayment({
                mode: paypalMode,
                clientId: paypalClientId,
                clientSecret: paypalClientSecret,
                amount,
                currency,
                description
            });

            res.status(200).json(paymentResult);
        } catch (error) {
            loggerUtil.logError('Error processing PayPal payment:', error);
            res.status(500).json({ message: 'Error processing PayPal payment' });
        }
    },

    processStripePayment: async (req, res) => {
        try {
            const { stripePublishableKey, stripeSecretKey } = paymentConfig;
            const { amount, currency, description } = req.body;

            const paymentResult = await stripeService.processPayment({
                publishableKey: stripePublishableKey,
                secretKey: stripeSecretKey,
                amount,
                currency,
                description
            });

            res.status(200).json(paymentResult);
        } catch (error) {
            loggerUtil.logError('Error processing Stripe payment:', error);
            res.status(500).json({ message: 'Error processing Stripe payment' });
        }
    },

    processGooglePayPayment: async (req, res) => {
        try {
            const { googleMerchantId, googleMerchantName } = paymentConfig;
            const { amount, currency, description } = req.body;

            const paymentResult = await googlePayService.processPayment({
                merchantId: googleMerchantId,
                merchantName: googleMerchantName,
                amount,
                currency,
                description
            });

            res.status(200).json(paymentResult);
        } catch (error) {
            loggerUtil.logError('Error processing Google Pay payment:', error);
            res.status(500).json({ message: 'Error processing Google Pay payment' });
        }
    },

    processApplePayPayment: async (req, res) => {
        try {
            const { appleMerchantId, appleMerchantName } = paymentConfig;
            const { amount, currency, description } = req.body;
            
            const paymentResult = await applePayService.processPayment({
                merchantId: appleMerchantId,
                merchantName: appleMerchantName,
                amount,
                currency,
                description
            });

            res.status(200).json(paymentResult);
        } catch (error) {
            loggerUtil.logError('Error processing Apple Pay payment:', error);
            res.status(500).json({ message: 'Error processing Apple Pay payment' });
        }
    }
};

module.exports = paymentController;
