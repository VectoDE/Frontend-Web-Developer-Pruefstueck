const stripe = require('stripe');
const paymentConfig = require('../config/payment.config.cjs');

const stripeClient = stripe(paymentConfig.stripeSecretKey);

const stripeUtil = {
    createPaymentIntent: async (amount, currency) => {
        try {
            const paymentIntent = await stripeClient.paymentIntents.create({
                amount: amount,
                currency: currency
            });
            return paymentIntent;
        } catch (error) {
            console.error('Error creating payment intent:', error);
            throw error;
        }
    },

    confirmPaymentIntent: async (paymentIntentId) => {
        try {
            const paymentIntent = await stripeClient.paymentIntents.confirm(paymentIntentId);
            return paymentIntent;
        } catch (error) {
            console.error('Error confirming payment intent:', error);
            throw error;
        }
    }
};

module.exports = stripeUtil;
