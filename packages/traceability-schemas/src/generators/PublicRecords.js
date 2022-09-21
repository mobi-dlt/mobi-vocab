const faker = require('faker');

const getPublicRecords = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'PublicRecords',
        bankruptcyIndicator: 'true',
        bankruptcyDate: '2022.02.02',
        bankruptcyType: 'type',
        additionalNotices: 'none'
    };
    return example;
};

module.exports = { getPublicRecords };
