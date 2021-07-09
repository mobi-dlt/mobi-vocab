const faker = require('faker');

const { getEntity } = require('./Entity');

const getBatteryID = () => {
    const manufacturer = getEntity();
    delete manufacturer['@context'];
    manufacturer.name = 'Panasonic';

    const example = {
        '@context': ['https://mobinet.io/schemas/v1'],
        type: 'BatteryID',
        VID: 'did:mobi:c276e12ec21ebfeb1f712ebc6f',
        BatteryID: 'did:mobi:ebfeb1f712ebc6f1c276e12ec21',
        manufacturer,
        model: 'Panasonic EV',
        serialNumber: 'H1591BO0732A',
    };
    return example;
};

module.exports = { getBatteryID };
