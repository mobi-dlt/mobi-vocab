const faker = require('faker');

const { getVID } = require('./VID');

const getRevocationCertificate = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'RevocationCertificate',
        UIUD: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        RevokeHeader: 'REVOKE',
        PrevCert: 'previ UIUD',
        IssuerEID: 'sampleuri',
        Expiration: '2021-10-21',
        Reason: 'Revoaked due to expiration',
        SignAlgo: 'algo',
    };
    return example;
};

module.exports = { getRevocationCertificate };
