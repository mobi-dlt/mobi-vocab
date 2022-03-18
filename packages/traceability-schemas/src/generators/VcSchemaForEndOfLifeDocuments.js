const faker = require('faker');

const getVcSchemaForEndOfLifeDocuments = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForEndOfLifeDocuments',
        endOfLifeDispositionType: '123',
        vid: 'ABC123',
        reason: 'DEF123',
        eventDateTime: 'testing..',
        dispositionGeolocation: 'test',
        prevOwnerId: 'test',
        newOwnerId: 'test',
        titleNumber: 'test',
        titleAuthority: 'test',
        wasteCert: 'test',
        jurisdictionSpecificRequirement: 'testing...'
    };
    return example;
};

module.exports = { getVcSchemaForEndOfLifeDocuments };
