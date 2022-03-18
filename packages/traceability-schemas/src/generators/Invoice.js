const faker = require('faker');

const getInvoice = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema/schemas'],
    type: 'Invoice',
    identifier: `IN-${faker.random.number()}`,

  };
  return example;
};

module.exports = { getInvoice };
