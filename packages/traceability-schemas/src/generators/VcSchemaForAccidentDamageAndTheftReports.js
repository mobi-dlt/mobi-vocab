const faker = require('faker');

const getVcSchemaForAccidentDamageAndTheftReports = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForAccidentDamageAndTheftReports',
        eventId: '123',
        vid: 'ABC123',
        reportID: 'DEF123',
        insuranceClaimNumber: 'ZXC123',
        repairOrderNumber: 'testing...',
        driverID: 'testing...',
        geolocation: 'testing...',
        dateTime: 'testing...',
        eventDescription: 'testing...',
        jursidictionSpecificRequirement: 'testing...'
    };
    return example;
};

module.exports = { getVcSchemaForAccidentDamageAndTheftReports };
