const faker = require('faker');

const getVcSchemaForInspectionsReport = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForInspectionsReport',
        dateTime: 'testing...',
        serviceProviderEntityId: '123',
        serviceProviderName: 'test',
        serviceInspectorId: 'test',
        inspectionGeolocation: 'test',
        inspectionType: 'test',
        vehicleType: 'test',
        requestedAction: 'test',
        vin: '123',
        inspectionOutcome: 'test',
        inspectionCertId: 'test',
        certIssuer: 'test',
        certExpDate: 'test',
        inspectionDetails: 'test',
        inspectionComment: 'test',
        jurisdictionSpecificRequirement: 'testing...'
    };
    return example;
};

module.exports = { getVcSchemaForInspectionsReport };
