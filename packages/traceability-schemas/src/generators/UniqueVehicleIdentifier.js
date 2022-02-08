const faker = require('faker');

const getUniqueVehicleIdentifier = () => {
    const example = {
        '@context': ['https://goodlookingtech.com'],
        type: 'UniqueVehicleIdentifier',
        uvi: 'testing...'
    };
  return example;
};

module.exports = { getUniqueVehicleIdentifier };
