const faker = require('faker');

const getVcSchemaForOwnersTitlesAndBordersDocs = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'VcSchemaForOwnersTitlesAndBordersDocs',
        titleType: 'testing...',
        status: '123',
        brands: 'test',
        titleJurisdiction: 'test',
        prevTitleJurisdiction: 'test',
        prevOwners: 'test',
        lienId: 'test',
        lenderId: 'test',
        lienHolderName: 'test',
        lienHolderAddress: faker.address.streetAddress(),
        titleNumber: '12345',
        issueDate: faker.date.past(),
        effectiveDate: faker.date.past(),
        city: faker.address.city(),
        county: faker.address.county(),
        state: faker.address.state(),
        country: faker.address.country(),
        odometerReading: '6000',
        jurisdictionSpecificRequirement: 'test',
        geolocation: 'test',
        dateTime: faker.date.past(),
        transactionType: faker.finance.transactionType(),
        transactionContract: faker.finance.ethereumAddress(),
        titleEvidence: 'test',
        newOwnerName: faker.name.firstName(),
        newOwnerAddress: faker.address.streetAddress(),
        lienExistence: true,
    };
    return example;
};

module.exports = { getVcSchemaForOwnersTitlesAndBordersDocs };
