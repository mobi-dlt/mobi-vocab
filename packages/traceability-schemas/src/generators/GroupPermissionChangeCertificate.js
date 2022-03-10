const faker = require('faker');

const getGroupPermissionChangeCertificate = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'GroupPermissionChangeCertificate',
        URI: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        OwnerEID: 'pubkey',
        Group: 'sampleuri',
        Read: 'sampleuri',
        Write: 'blocked uri',
        SignAlgo: 'algo',
    };
    return example;
};

module.exports = { getGroupPermissionChangeCertificate };
