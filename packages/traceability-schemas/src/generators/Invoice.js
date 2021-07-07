const faker = require('faker');

const getInvoice = () => {
  const example = {
    '@context': ['https://mobinet.io/schemas/v1'],
    type: 'Invoice',
    identifier: `IN-${faker.random.number()}`,

  };
  return example;
};

module.exports = { getInvoice };
