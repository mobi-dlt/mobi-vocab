const faker = require('faker');

const { getVID } = require('./VID');

const getBatteryID = () => {
    const vidNumber = getVID();
    delete vidNumber['@context'];

    const example = {
        '@context': ['https://w3id.org/traceability/v1'],
        type: 'BatteryID',
        vid: vidNumber,
        batteryid: 'did:mobi:e436e12ec21ebfeb1f712ebc3g',
        serialNumber: 'snumber',

    };
    return example;
};

module.exports = { getBatteryID };
