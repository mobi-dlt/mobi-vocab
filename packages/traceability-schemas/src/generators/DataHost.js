const faker = require('faker');

const { getEC } = require('./EC');

const getDataHost = () => {
    const entityInfo = getEC();
    delete entityInfo['@context'];

    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'DataHost',
        EntityInfo: entityInfo,
        Endpoint: 'url',
        HostType: '<name,type> pair',
    };
    return example;
};

module.exports = { getDataHost };
