const faker = require('faker');
const { generator } = require('../data/util/data');
const { getPermissions } = require('./Permissions');

const getPermissionsCredential = () => {
  const fakeFuture = generator.dates.future;
  const futureDate = generator.dates.futureAlt;
  const today = generator.dates.current;
  const lei = faker.random.alphaNumeric(20).toUpperCase();
  const permissionSetting = getPermissions();
  delete permissionSetting['@context'];

  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'PermissionsCredential',
    permission: permissionSetting,
    holder: 'did:mobinet:123456789abcdefghi',
    issuanceDate: today,
    expirationDate: futureDate,
  };
  return example;
};

module.exports = { getPermissionsCredential };
