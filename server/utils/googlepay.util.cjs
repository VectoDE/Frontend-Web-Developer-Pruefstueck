const { PaymentRequest } = require('payment-request-api');
const googlePayConfig = require('../config/googlepay.config.cjs');

const googlePayUtil = {
    createPaymentRequest: async () => {
        const { googlePay } = googlePayConfig;
        const { merchantName, merchantId } = googlePay.merchantInfo;
        const { allowedCardNetworks, allowedCardAuthMethods } = googlePay.allowedPaymentMethods[0].parameters;

        const paymentMethods = [{
            supportedMethods: 'https://google.com/pay',
            data: {
                merchantId: merchantId,
                merchantName: merchantName,
                allowedCardNetworks: allowedCardNetworks,
                allowedCardAuthMethods: allowedCardAuthMethods
            },
        }];

        const paymentDetails = {
            total: {
                label: 'Total',
                amount: {
                    currency: googlePay.transactionInfo.currencyCode,
                    value: googlePay.transactionInfo.totalPrice
                }
            },
        };

        const options = {
            requestPayerName: true,
            requestPayerPhone: true,
            requestPayerEmail: true,
            requestShipping: true,
        };

        const paymentRequest = new PaymentRequest(
            paymentMethods,
            paymentDetails,
            options
        );

        return paymentRequest;
    },

    processPaymentResponse: async (paymentResponse) => {
        console.log('Payment response:', paymentResponse);
        return true;
    }
};

module.exports = googlePayUtil;
