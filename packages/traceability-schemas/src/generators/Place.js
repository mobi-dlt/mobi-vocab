const { getPostalAddress } = require('./PostalAddress');
const { getGeoCoordinates } = require('./GeoCoordinates');
const { getGlobalLocationNumber } = require('./GlobalLocationNumber');

const getPlace = () => {
  const globalLocationNumber = getGlobalLocationNumber();
  const geo = getGeoCoordinates();
  delete geo['@context'];
  const address = getPostalAddress();
  delete address['@context'];
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'Place',
    globalLocationNumber,
    geo,
    address,
  };
  return example;
};

module.exports = { getPlace };
