const faker = require('faker');
const { getMember } = require('./Member');

faker.seed(42);

const getCitopiaMembershipCredential = () => {
  // Get organization
  const memberInfo = getMember();
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'CitopiaMembershipCredential',
    holder: 'Matt Shi',
    identifier: 'did:mobinet:123456789abcdefghi',
    member: memberInfo,
    issuanceDate: '2020-05-17',
    expirationDate: '2021-5-29'
  };
  return example;
};

module.exports = { getCitopiaMembershipCredential };
