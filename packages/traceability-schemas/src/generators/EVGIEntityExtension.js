const faker = require('faker');

const { getVID } = require('./VID');

const getEVGIEntityExtension = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'EVGIEntityExtension',
        Address: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        URI: 'uri',
        IssuerEID: 'sampleuri',
        BREID: 'target EID',
        SignAlgo: 'algo',
        Reason: ' expired'
    };
    return example;
};

module.exports = { getEVGIEntityExtension };
