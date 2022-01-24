const faker = require('faker');
const { generator } = require('../data/util/data');
const { getLEIauthority } = require('./LEIauthority');

const getIdentityCredential = () => {
  const fakeFuture = generator.dates.future;
  const futureDate = generator.dates.futureAlt;
  const today = generator.dates.current;
  const lei = faker.random.alphaNumeric(20).toUpperCase();
  const auth = getLEIauthority();
  delete auth['@context'];

  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'IdentityCredential',
    legalName: 'Matt Shi',
    licenseNumber: 'Y5327288',
    registrationAuthority: auth,
    issuanceDate: today,
    expirationDate: futureDate,
  };
  return example;
};

module.exports = { getIdentityCredential };
