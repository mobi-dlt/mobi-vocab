const faker = require('faker');

const { getEC } = require('./EC');

const getServiceProvider = () => {
    const entityInfo = getEC();
    delete entityInfo['@context'];

    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'ServiceProvider',
        EntityInfo: entityInfo,
        LegalName: 'mobi',
        Address: 'entity address',
        PhoneNumber: '312-888-0766',
        Email: 'hi@dlt.mobi'
    };
    return example;
};

module.exports = { getServiceProvider };
