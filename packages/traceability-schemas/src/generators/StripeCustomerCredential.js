const faker = require('faker');
const { generator } = require('../data/util/data');
const { getLEIauthority } = require('./LEIauthority');

const getStripeCustomerCredential = () => {
  const fakeFuture = generator.dates.future;
  const futureDate = generator.dates.futureAlt;
  const today = generator.dates.current;
  const lei = faker.random.alphaNumeric(20).toUpperCase();
  const auth = getLEIauthority();
  delete auth['@context'];

  const example = {
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/traceability/v1',
      ],
    type: ['StripeCustomerCredential', 'VerifiableCredential'],
    holder: 'did:mobi:f436e12ec21ebfdb1f712ebc3h',
    id: '123',
    customerID: 'customer123',
    issuanceDate: today,
    expirationDate: futureDate,
  };
  return example;
};

module.exports = { getStripeCustomerCredential };
