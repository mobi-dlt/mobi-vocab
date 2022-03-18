const faker = require('faker');

const getVcSchemaForPaymentsAndTxReceipts = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForPaymentsAndTxReceipts',
        eventId: 'testing...',
        vid: '123',
        dateOfTx: 'test',
        transactionId: 'test',
        transactionType: 'test',
        merchantId: 'test',
        geolocation: 'test',
        transactionAmount: 'test',
        processorId: '123',
        otherAncillaryData: 'test',
        otherInfo: 'test'
    };
    return example;
};

module.exports = { getVcSchemaForPaymentsAndTxReceipts };
