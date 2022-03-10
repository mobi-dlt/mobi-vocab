const faker = require('faker');

const { getVID } = require('./VID');

const getUserEntityID = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'UserEntityID',
        EntityUserID: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        Address: 'address',
        Email: 'matt@dlt.mobi',
        Name: 'matt',
        PhoneNumber: '3128880765',
    };
    return example;
};

module.exports = { getUserEntityID };
