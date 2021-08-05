const faker = require('faker');

const getPermissions = () => {
    const example = {
        '@context': ['https://w3id.org/traceability/v1'],
        type: 'Permissions',
        userLocation: 'True',
        vehicleLocation: 'True',
        mobiVID: 'True',
        batteryId: 'True',
        dataSharingForRewards: 'True'

    };
    return example;
};

module.exports = { getPermissions };
