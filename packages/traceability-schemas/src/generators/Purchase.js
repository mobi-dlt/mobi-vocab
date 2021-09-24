// const faker = require('faker');

const { getEntity } = require('./Entity');

const getPurchase = () => {
  const ent = getEntity();
  delete ent['@context'];
  const example = {
    '@context': ['https://dlt.mobi/mobility'],
    type: ['Purchase'],
    customer: ent,
  };
  return example;
};

module.exports = { getPurchase };
