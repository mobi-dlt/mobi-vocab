const faker = require('faker');

const { getEC } = require('./EC');

const getTrustAnchor = () => {
    const entityInfo = getEC();
    delete entityInfo['@context'];

    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'TrustAnchor',
        EntityInfo: entityInfo,
        identifier: 'Trust Anchor Name',
    };
    return example;
};

module.exports = { getTrustAnchor };
