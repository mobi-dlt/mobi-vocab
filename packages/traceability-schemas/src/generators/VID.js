const faker = require('faker');
const { getEntity } = require('./Entity');

const getVID = () => {
    const manufacturer = getEntity();
    delete manufacturer['@context'];

    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'VID',
        vid: 'did:mobi:c276e12ec21ebfeb1f712ebc6f',
        manufacturer,
        make: 'Ford',
        model: 'Mach_E',
        vin: 'JTERU5JR7M5861170',

    };
  return example;
};

module.exports = { getVID };
