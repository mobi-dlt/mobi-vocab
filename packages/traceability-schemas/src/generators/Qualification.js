const faker = require('faker');

faker.seed(42);
const getQualification = () => {
  const example = {
    '@context': ['https://mobinet.io/schemas/v1'],
    type: 'Qualification',
    qualificationCategory: faker.name.jobTitle(),
    qualificationValue: faker.name.jobType(),
  };
  return example;
};

module.exports = { getQualification };
