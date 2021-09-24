const faker = require('faker');

const getAccessCertificate = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'AccessCertificate',
        UIUD: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        URI: 'pubkey',
        IssuerEID: 'EID',
        RootAuthEID: 'EID',
        Expiration: 'expire date',
        SignAlgo: 'algo',
    };
    return example;
};

module.exports = { getAccessCertificate };
