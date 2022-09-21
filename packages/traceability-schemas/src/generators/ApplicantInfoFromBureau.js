const faker = require('faker');

const getApplicantInfoFromBureau = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'ApplicantInfoFromBureau',
        familyName: 'LastName',
        givenName: 'FirstName',
        middleInitial: 'M',
        nameIdentificationNumber: '20893740983',
        addressLineOne: '1800 Test Way',
        addressLineTwo: 'Apt.1',
        city: 'CityName',
        stateOrRegion: 'StateName',
        postalCode: '00000',
        countryCode: 'TC',
        residenceType: 'rental',
        citizenId: '290384023948',
        birthDate: '2022.01.01',
        birthCity: 'CityBirth',
        birthCountry: 'CountryBirth',
        spouseName: 'TestSpouse'
    };
    return example;
};

module.exports = { getApplicantInfoFromBureau };
