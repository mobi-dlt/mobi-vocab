const faker = require('faker');

const { getVID } = require('./VID');

const getDataHostBootstrappingCertificate = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'DataHostBootstrappingCertificate',
        UIUD: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        WebURI: 'pubkey',
        DataStructure: 'sampleuri',
        CommitFrequencyT: '1',
        ReceiverEID: 'sampleuri',
        RootAuthEID: 'sig',
        OwnerEID: 'sampleuri',
        RootAuthSig: 'sig',
        SignAlgo: 'algo',
    };
    return example;
};

module.exports = { getDataHostBootstrappingCertificate };
