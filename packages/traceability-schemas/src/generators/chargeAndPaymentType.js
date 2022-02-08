const faker = require('faker');

const getchargeAndPaymentType = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'chargeAndPaymentType',
    chargeCollect: faker.random.number({ min: 10, max: 1000 }),
    chargePrepaid: faker.random.number({ min: 10, max: 1000 }),
  };
  return example;
};

module.exports = { getchargeAndPaymentType };
