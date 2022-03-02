const faker = require('faker');

const getVcSchemaForPartsReplacementReport = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForPartsReplacementReport',
        dateTime: 'test',
        serviceProviderEntityId: 'test',
        geolocation: 'test',
        estimateNumber: 'test',
        invoiceNumber: 'test',
        // // partType: 'test',
        oldPartNumber: 'test',
        oldPartSerialNumber: 'test',
        oldPartManufacturer: 'test',
        oldPartCondition: 'test',
        finalPartNumber: 'test',
        finalPartSerialNumber: 'test',
        finalPartManufacturer: 'test',
        // finalPartCondition: 'test',
        partRepairedOrReplaced: 'test',
        aftermarketLikeNewPart: 'test',
        reasonForReplacement: 'test',
        oldSoftwareVersion: 'test',
        newSoftwareVersion: 'test',
        jurisdictionSpecificRequirement: 'test',
    };
    return example;
};

module.exports = { getVcSchemaForPartsReplacementReport };

/**
 *
 *  "partType": {
            "$comment": "{\"term\": \"partType\", \"@id\": \"https://schema.org/additionalType\"}",
            "title": "partType",
            "description": "the type of part involved in the replacement",
            "type": "string"
        },

         "finalPartCondition": {
            "$comment": "{\"term\": \"finalPartCondition\", \"@id\": \"https://schema.org/additionalProperty\"}",
            "title": "finalPartCondition",
            "description": "the condition of the new part installed into the vehicle",
            "type": "string"
        },

 */
