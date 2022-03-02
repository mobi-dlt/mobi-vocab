const faker = require('faker');

const getVcSchemaForOwnersTitlesAndBordersDocs = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForOwnersTitlesAndBordersDocs',
        titleType: 'test'// ,
        // status: 'test'// ,
        // brands: 'test',
        // titleJurisdiction: 'test',
        // prevTitleJurisdiction: 'test',
        // prevOwners: 'test',
        // titleEvidence: 'test',
        // vid: 'test',
        // newOwnerName: 'test',
        // newOwnerAddress: 'test',
        // lienExistence: false,
        // lienId: 'test',
        // lenderId: 'test',
        // // lienHolderName: 'test',
        // lienHolderAddress: 'test',
        // titleNumber: 'test',
        // issueDate: 'test',
        // effectiveDate: 'test',
        // city: 'test',
        // county: 'test',
        // state: 'test',
        // // country: 'test',
        // odometerReading: 'test',
        // jurisdictionSpecificRequirement: 'test',
        // geolocation: 'test',
        // dateTime: 'test',
        // transactionType: 'test',
        // transactionContract: 'test'
    };
    return example;
};

module.exports = { getVcSchemaForOwnersTitlesAndBordersDocs };

/**
 *  Need to ask Matt what to do.. issue with not generating the fixtures...
 *
 */
