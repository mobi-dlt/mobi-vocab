const faker = require('faker');

const getGeoCoordinates = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema/schemas'],
    type: 'GeoCoordinates',
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  };
  return example;
};

module.exports = { getGeoCoordinates };
