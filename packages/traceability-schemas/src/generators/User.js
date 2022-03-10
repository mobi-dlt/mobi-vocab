const faker = require('faker');

const { getEC } = require('./EC');

const getUser = () => {
    const entityInfo = getEC();
    delete entityInfo['@context'];

    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'User',
        EntityInfo: entityInfo,
        PermissionedURI: 'uri',
        PermissionedEID: 'eid',
    };
    return example;
};

module.exports = { getUser };
