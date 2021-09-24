const faker = require('faker');

const { getVID } = require('./VID');

const getEC = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'EC',
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

module.exports = { getEC };
