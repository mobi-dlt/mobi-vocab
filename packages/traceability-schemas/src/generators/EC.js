const faker = require('faker');

const { getVID } = require('./VID');

const getEC = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'EC',
        EntityType: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        PubKey: 'pubkey',
        RevURI: 'sampleuri',
        ALURI: 'sampleuri',
        BLURI: 'blocked uri',
        SignAlgo: 'algo',
        HashAlgo: 'algo',
        Expiration: '10-19-2021',
        IssuerSig: 'sig'
    };
    return example;
};

module.exports = { getEC };
