const faker = require('faker');

const getVcSchemaForMileage = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForMileage',
        odometerReading: 'test',
        unit: 'test',
        dateTime: 'testing...',
        reportingAgencySource: '123',
        technicalSource: 'test',
        trigger: 'test',
        jurisdictionSpecificRequirement: 'testing...'
    };
    return example;
};

module.exports = { getVcSchemaForMileage };
