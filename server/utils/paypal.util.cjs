const paypal = require('paypal-rest-sdk');
const paymentConfig = require('../config/payment.config.cjs');

paypal.configure({
    mode: paymentConfig.paypal.mode,
    client_id: paymentConfig.paypal.clientId,
    client_secret: paymentConfig.paypal.clientSecret
});

const paypalUtil = {
    createPayment: async (paymentData) => {
        return new Promise((resolve, reject) => {
            paypal.payment.create(paymentData, (error, payment) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(payment);
                }
            });
        });
    },

    executePayment: async (paymentId, payerId) => {
        return new Promise((resolve, reject) => {
            paypal.payment.execute(paymentId, { payer_id: payerId }, (error, payment) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(payment);
                }
            });
        });
    }
};

module.exports = paypalUtil;
