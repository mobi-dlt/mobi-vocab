const faker = require('faker');

const { getPostalAddress } = require('./PostalAddress');

const getContactPoint = () => {
  // Get address
  const address = getPostalAddress();
  delete address['@context'];

  // remove Organization name from the PostalAddress schema we're pulling in
  delete address.organizationName;

  // create phone number beginning with 555 to ensure no real number is used
  const phone = `555-${faker.random.number({ min: 100, max: 999 })}-${faker.random.number({ min: 1000, max: 9999 })}`;

  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'ContactPoint',
    name: faker.company.companyName(),
    address,
    email: faker.internet.exampleEmail(),
    phoneNumber: phone,
  };
  return example;
};

module.exports = { getContactPoint };
