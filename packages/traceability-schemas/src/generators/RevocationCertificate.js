const faker = require('faker');

const getRevocationCertificate = () => {

    const example = {
        '@context': ['https://goodlookingtech.com'],
        type: 'RevocationCertificate',
        revokeHeader: 'REVOKE',
        identifier: 'did:mobi:c276f8fu81ebkdu1f782jfk3g',
        issuer: 'did:mobi:c276f8fs81jfodo1f293jfd3u',
        signature: '2aKrIcegDIrbGBsze9a8ZAgmkRGNmehe5oNHV6cJCnEHZzb6uYrHO1gpPPbqLxgF',
        sigAlgId: 'D3ALL6Rzmp63DyWWguNtEiFCZuGVCwS42NV0eKkWIPNPg6SKfNzdg3UMEcIiwDK0',

    };
  return example;
};

module.exports = { getRevocationCertificate };

