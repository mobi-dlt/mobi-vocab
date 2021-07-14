const faker = require('faker');

const { generator, schemas } = require('../data/util/data');

const ajv = generator.getAjv();

const { getEntity } = require('./Entity');
const { getProduct } = require('./Product');

const getBatteryID = () => {
    const ProductInfo = getProduct();
    delete ProductInfo['@context'];

    const example = {
        '@context': ['https://mobinet.io/schemas/v1'],
        type: 'BatteryID',
        VID: 'did:mobi:c276e12ec21ebfeb1f712ebc6f',
        BatteryID: 'did:mobi:ebfeb1f712ebc6f1c276e12ec21',
        ProductInfo,
        model: 'Panasonic EV',
        serialNumber: 'H1591BO0732A',
    };
    const validate = ajv.compile(schemas.BatteryID);
    const validateResult = validate(example);
    if (process.env.VERBOSE_BUILD_GENERAL) {
        console.log('Early Validation results from BatteryID:', validateResult);
    }
    return example;
};

module.exports = { getBatteryID };
