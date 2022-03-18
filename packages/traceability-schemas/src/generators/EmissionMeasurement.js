const getEmissionMeasurement = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'EmissionMeasurement',
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        totalFuelConsumed: '20',
        totalDistanceTraveled: '20000',
        Begin_DateTime: '2021-09-29T22:32:24+00:00',
        End_DateTime: '2021-09-29T23:31:24+00:00',

    };
  return example;
};

module.exports = { getEmissionMeasurement };
