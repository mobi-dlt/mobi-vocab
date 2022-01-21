const faker = require('faker');

const getEntityCertificate = () => {
    const example = {
        '@context': ['https://goodlookingtech.com'],
        type: 'EntityCertificate',
        entityIdentifier: 'testing',
        publicKey: 'testing... parth',
        signature: 'testing... signature',
        sigAlgId: 'testing.....',
        validityPeriod: 'testing.....'
    };
    return example;
};

module.exports = { getEntityCertificate };
