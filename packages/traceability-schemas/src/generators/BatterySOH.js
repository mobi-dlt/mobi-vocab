const faker = require('faker');

const { getBatteryID } = require('./BatteryID');

const getBatterySOH = () => {
    const batteryIdentifier = getBatteryID();
    delete batteryIdentifier['@context'];

    const example = {
        '@context': ['https://w3id.org/traceability/v1'],
        type: 'BatterySOH',
        sohCertID: 'idnumber',
        sohCertIssuerID: 'idnumber',
        batteryid: batteryIdentifier,
        previousSOHVal: '95',
        previousSOHTimeStamp: '2020-5-17',
        newSOHVal: '94',
        newSOHTimeStamp: '2020-10-17',
        chargeCycles: '30',
        maxCapacity: '87',
        impedance: '70',
        batteryAge: '1.2'
    };
    return example;
};

module.exports = { getBatterySOH };
