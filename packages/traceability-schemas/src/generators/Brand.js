const faker = require('faker');

const getBrand = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
    type: 'Brand',
    logo: faker.image.imageUrl(),
    url: 'https://brand.example.com',

  };
  return example;
};

module.exports = { getBrand };
