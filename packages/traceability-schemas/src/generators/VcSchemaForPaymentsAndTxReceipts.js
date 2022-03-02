const faker = require('faker');

const getVcSchemaForPaymentsAndTxReceipts = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForPaymentsAndTxReceipts',
        eventId: 'testing...',
        vid: '123',
        dateOfTx: 'test',
        transactionId: 'test',
        // transactionType: 'test',
        // merchantId: 'test',
        geolocation: 'test',
        transactionAmount: 'test',
        // processorId: '123',
        // otherAncillaryData: 'test',
        otherInfo: 'test'
    };
    return example;
};

module.exports = { getVcSchemaForPaymentsAndTxReceipts };

/**
 *
 * "transactionType": {
            "$comment": "{\"term\": \"transactionType\", \"@id\": \"https://schema.org/additionalType\"}",
            "title": "transactionType",
            "description": "type of transaction",
            "type": "string"
        },

        "merchantId": {
            "$comment": "{\"term\": \"merchantId\", \"@id\": \"https://schema.org/identifier\"}",
            "title": "merchantId",
            "description": "unique identifier for the merchant",
            "type": "string"
        },

         "processorId": {
            "$comment": "{\"term\": \"processorId\", \"@id\": \"https://schema.org/identifier\"}",
            "title": "processorId",
            "description": "identifier for the transaction processor",
            "type": "string"
        },
         "otherAncillaryData": {
            "$comment": "{\"term\": \"otherAncillaryData\", \"@id\": \"https://schema.org/additionalProperty\"}",
            "title": "otherAncillaryData",
            "description": "any metadata not captured by previous attributes",
            "type": "string"
        },
 */
