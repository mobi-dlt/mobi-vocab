const faker = require('faker');

const getInvoice = () => {
  const example = {
    '@context': ['https://goodlookingtech.com'],
    type: 'Invoice',
    identifier: `IN-${faker.random.number()}`,

  };
  return example;
};

module.exports = { getInvoice };
