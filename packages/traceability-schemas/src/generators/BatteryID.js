const faker = require('faker');

const { getVID } = require('./VID');

const getBatteryID = () => {
    const vidNumber = getVID();
    delete vidNumber['@context'];

    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'BatteryID',
        vid: vidNumber,
        batteryid: 'did:mobi:e436e12ec21ebfeb1f712ebc3g',
        serialNumber: '2345H152031173270027',

    };
    return example;
};

module.exports = { getBatteryID };
