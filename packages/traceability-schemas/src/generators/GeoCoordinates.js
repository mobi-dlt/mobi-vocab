const faker = require('faker');

const getGeoCoordinates = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'GeoCoordinates',
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    elevation: '5000 ft',
    timestamp: faker.date.past(),
    locationDescription: 'geo coordinates',
  };
  return example;
};

module.exports = { getGeoCoordinates };
