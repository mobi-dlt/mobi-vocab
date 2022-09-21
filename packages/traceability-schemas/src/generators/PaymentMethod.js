const faker = require('faker');

const getPaymentMethod = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'PaymentMethod',
        paymentMethod: 'Stripe',

    };
    return example;
};

module.exports = { getPaymentMethod };
