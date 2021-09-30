const getVehicleSpec = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'VehicleSpec',
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        OEM: 'Volkswagen',
        MODEL: 'Golf',
        typeRating: 'M1',
        fuelType: 'petrol',
        weight: '1389',
        power: '162'

    };
  return example;
};

module.exports = { getVehicleSpec };
