const https = require('https');
const config = require('../config/payment.config.cjs');

const applePayUtil = {
    validateMerchant: async () => {
        const { applePay } = config;
        const { merchantId, merchantName } = applePay.merchantInfo;

        const requestOptions = {
            hostname: 'apple-pay-gateway.apple.com',
            path: '/paymentSession',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(merchantId + ':').toString('base64')}`
            }
        };

        const requestPayload = JSON.stringify({
            merchantIdentifier: merchantId,
            domainName: merchantName
        });

        return new Promise((resolve, reject) => {
            const req = https.request(requestOptions, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    const responseData = JSON.parse(data);
                    resolve(responseData);
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.write(requestPayload);
            req.end();
        });
    }
};

module.exports = applePayUtil;
