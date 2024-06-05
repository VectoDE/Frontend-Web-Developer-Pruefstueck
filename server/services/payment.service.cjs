const loggerUtil = require('../utils/logger.util.cjs');
const paypalUtil = require('../utils/paypal.util.cjs');
const stripeUtil = require('../utils/stripe.util.cjs');
const googlePayUtil = require('../utils/googlepay.util.cjs');
const applePayUtil = require('../utils/applepay.util.cjs');

const paymentService = {
    processPaypalPayment: async (paymentData) => {
        try {
            const payment = await paypalUtil.createPayment(paymentData);

            const executedPayment = await paypalUtil.executePayment(payment.id, payment.payer.payer_info.payment_method);
            
            loggerUtil.logInfo('PayPal payment processed:', executedPayment);
            return executedPayment;
        } catch (error) {
            loggerUtil.logError('Error processing PayPal payment:', error);
            throw error;
        }
    },

    processStripePayment: async (amount, currency) => {
        try {
            const paymentIntent = await stripeUtil.createPaymentIntent(amount, currency);

            const confirmedPaymentIntent = await stripeUtil.confirmPaymentIntent(paymentIntent.id);
            
            loggerUtil.logInfo('Stripe payment processed:', confirmedPaymentIntent);
            return confirmedPaymentIntent;
        } catch (error) {
            loggerUtil.logError('Error processing Stripe payment:', error);
            throw error;
        }
    },

    processGooglePayPayment: async (paymentData) => {
        try {
            const paymentResult = await googlePayUtil.processPayment(paymentData);

            loggerUtil.logInfo('Google Pay payment processed:', paymentResult);
            return paymentResult;
        } catch (error) {
            loggerUtil.logError('Error processing Google Pay payment:', error);
            throw error;
        }
    },

    processApplePayPayment: async (paymentData) => {
        try {
            const paymentResult = await applePayUtil.processPayment(paymentData);

            loggerUtil.logInfo('Apple Pay payment processed:', paymentResult);
            return paymentResult;
        } catch (error) {
            loggerUtil.logError('Error processing Apple Pay payment:', error);
            throw error;
        }
    }
};

module.exports = paymentService;
