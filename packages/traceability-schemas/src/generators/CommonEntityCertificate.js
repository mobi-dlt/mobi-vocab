const faker = require('faker');

const getCommonEntityCertificate = () => {
  const randomType = faker.random.arrayElement(['person', 'organization']);

  const example = {
    '@context': ['https://goodlookingtech.com'],
    type: 'CommonEntityCertificate',
    EID: 'did:mobi:e436e12ec21ebfeb1f712ebc3g',
    EntityType: '0',
    PubKey: 'pubkey',
    RevURI: 'uri',
    ALURI: 'uri',
    BLURI: 'uri',
    SignAlgo: 'algo',
    HashAlgo: 'algo',
    Expiration: 'date',
    Issuer: 'a',
    IssuerSig: 'a',
  };
  return example;
};

module.exports = { getCommonEntityCertificate };
