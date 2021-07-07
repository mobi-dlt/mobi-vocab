const faker = require('faker');

const getGeoCoordinates = () => {
  const example = {
    '@context': ['https://mobinet.io/schemas/v1'],
    type: 'GeoCoordinates',
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  };
  return example;
};

module.exports = { getGeoCoordinates };
