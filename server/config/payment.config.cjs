module.exports = {
    /* Google Payment Gateway */
    googlePay: {
        environment: 'TEST', // 'TEST' or 'PRODUCTION'
        merchantInfo: {
            merchantName: 'Your Google Merchant Name',
            merchantId: 'yourGoogleMerchantId'
        },
        allowedPaymentMethods: [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA']
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example', // Replace with your gateway name
                        gatewayMerchantId: 'exampleGatewayMerchantId' // Replace with your gateway merchant ID
                    }
                }
            }
        ],
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '0.00', // Replace with actual price
            currencyCode: 'USD'
        },
        emailRequired: true // Set to false if email is not required
    },

    /* Apple Payment Gateway */
    applePay: {
        merchantId: 'yourAppleMerchantId',
        merchantName: 'Your Apple Merchant Name'
    },

    /* Stripe Payment Gateway */
    stripe: {
        publishableKey: 'yourStripePublishableKey',
        secretKey: 'yourStripeSecretKey'
    },

    /* PayPal Payment Gateway */
    paypal: {
        mode: 'sandbox', // 'sandbox' or 'live'
        clientId: 'yourPaypalClientId',
        clientSecret: 'yourPaypalClientSecret'
    }
};
