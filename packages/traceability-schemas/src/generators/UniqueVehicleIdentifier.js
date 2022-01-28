const faker = require('faker');

const getuniqueVehicleIdentifier = () => {

    const example = {
        '@context': ['https://goodlookingtech.com'],
        type: 'uniqueVehicleIdentifier',
        uvi: '36h948q767wuxUlzLk2dAIzWWVgTTN8X9F8nmr7upRgRdL4VomOqJLOg4ftP3Gkg',

    };
  return example;
};

module.exports = { getuniqueVehicleIdentifier };
