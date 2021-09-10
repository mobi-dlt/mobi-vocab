const faker = require('faker');

const getGeoCoordinates = () => {
  const example = {
    '@context': ['https://goodlookingtech.com'],
    type: 'GeoCoordinates',
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  };
  return example;
};

module.exports = { getGeoCoordinates };
