const faker = require('faker');

faker.seed(42);

const getMember = () => {
  // Get organization
  const example = {
    '@context': ['https://goodlookingtech.com'],
    type: 'Member',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.exampleEmail()
  };
  return example;
};

module.exports = { getMember };
