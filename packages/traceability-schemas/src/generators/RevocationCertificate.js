const faker = require('faker');

const getRevocationCertificate = () => {
    const example = {
        '@context': ['https://goodlookingtech.com'],
        type: 'RevocationCertificate',
        identifier: 'testing...',
        revokeHeader: 'testing...',
        issuer: 'testing...',
        signature: 'testing...',
        sigAlgId: 'testing...'
    };
  return example;
};

module.exports = { getRevocationCertificate };
