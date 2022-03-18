const faker = require('faker');

const getVcSchemaForUsageDataReports = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'VcSchemaForUsageDataReports',
        infraOwnerEntityId: 'testing...',
        dateTime: '123',
        energyConsumed: 'test',
        chargerId: 'test',
        chargeStartTime: 'test',
        chargeEndTime: 'test',
        meterId: 'test',
        chargingDataSource: 'test',
        chargerGeolocation: '123',
        fuelStationId: 'test',
        fuelType: 'test',
        fuelVolumeConsumed: 'test',
        fuelEventDataSource: 'test',
        fuelEventGeolocation: 'test',
        parkingAtHome: 'test',
        parkingAtWork: 'test',
        parkingEventDateTime: 'test',
        parkingEventGeolocation: 'test',
        parkingEventType: 'test',
        jurisdictionSpecificRequirement: 'test',
    };
    return example;
};

module.exports = { getVcSchemaForUsageDataReports };
