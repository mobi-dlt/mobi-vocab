/**
 *    Added elevation, timestamp, & description attributes.. later to use GeoCoordinates as subschema in TrustedTripLocationAndTime
 */

const faker = require('faker');

const { getGeoCoordinates } = require('./GeoCoordinates');

const locationAndTime = getGeoCoordinates();
delete locationAndTime['@context'];

const getTrustedTripLocationAndTime = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'TrustedTripLocationAndTime',
        locationAndTime
    };
    return example;
};

module.exports = { getTrustedTripLocationAndTime };
