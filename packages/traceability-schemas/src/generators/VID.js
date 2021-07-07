const faker = require('faker');

const { getEntity } = require('./Entity');

const getVID = () => {
    const manufacturer = getEntity();
    delete manufacturer['@context'];

    const example = {
        '@context': ['https://mobinet.io/schemas/v1'],
        type: 'VID',
        vehicleID: 'sample_VID',
        manufacturer,
        make: 'Tesla',
        model: 'Tesla',
        vin: 'vin_number_123',
        licensePlate: 'test_plate_xxx',
    };
    return example;
};

module.exports = { getVID };
