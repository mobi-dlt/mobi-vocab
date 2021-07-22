const faker = require('faker');
const { generator } = require('../data/util/data');
const { getLEIauthority } = require('./LEIauthority');

const getDriverLicense = () => {
  const fakeFuture = generator.dates.future;
  const futureDate = generator.dates.futureAlt;
  const today = generator.dates.current;
  const lei = faker.random.alphaNumeric(20).toUpperCase();
  const auth = getLEIauthority();
  delete auth['@context'];

  const example = {
    '@context': ['https://w3id.org/traceability/v1'],
    type: 'DriverLicense',
    legalName: 'Matt Shi',
    licenseNumber: 'licenseNumber123',
    registrationAuthority: auth,
    issuanceDate: today,
    expirationDate: futureDate,
  };
  return example;
};

module.exports = { getDriverLicense };
