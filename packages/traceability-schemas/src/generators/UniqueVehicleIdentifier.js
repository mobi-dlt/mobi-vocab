const faker = require('faker');

const getUniqueVehicleIdentifier = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'UniqueVehicleIdentifier',
        uvi: 'testing...'
    };
  return example;
};

module.exports = { getUniqueVehicleIdentifier };
