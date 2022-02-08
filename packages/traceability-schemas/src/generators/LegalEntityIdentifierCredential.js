const faker = require('faker');

const getLegalEntityIdentifierCredential = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'LegalEntityIdentifierCredential',
    leiCode: faker.random.alphaNumeric(20).toUpperCase(),
    certificateName: 'US Legal Entity Certificate',
  };

  return example;
};

module.exports = { getLegalEntityIdentifierCredential };
