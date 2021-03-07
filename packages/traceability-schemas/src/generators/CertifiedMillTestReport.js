const { generator, schemas } = require('../data/util/data');

const { faker } = generator;

const ajv = generator.getAjv();

const getCertifiedMillTestReport = () => {
  const example = {
    '@context': 'https://w3id.org/traceability/v1',
    type: ['CertifiedMillTestReport'],
    heatNumber: '31235',
    category: 'Rebar',
    description: '',
    specification: '',
    grade: '',
    size: '',
    originalCountryOfMeltAndPour: 'CA',
    manufacturer: {
      type: 'Place',
      globalLocationNumber: '3857367970333',
      geo: { type: 'GeoCoordinates', latitude: '-86.0919', longitude: '-135.9487' },
      address: {
        type: 'PostalAddress', organizationName: 'Balistreri - Heathcote', streetAddress: '745 Luigi Station', addressLocality: 'North Gregoryland', addressRegion: 'Illinois', postalCode: '20685', addressCountry: 'Austria'
      }
    },
    purchase: {
      type: 'Purchase',
      purchaseOrder: 'PO-7478562',
      invoice: { type: 'Invoice', identifier: 'IN-122387' },
      customer: {
        type: 'Organization',
        globalLocationNumber: '3857367970333',
        contactPoint: [{
          type: 'Person', name: 'Stacy Slater', jobTitle: 'Quality Assurance Supervisor', email: 'support@brand.example', phoneNumber: '555-555-5555'
        }, {
          type: 'Organization',
          address: {
            type: 'PostalAddress', streetAddress: '1234 Baltimore Ave.', addressLocality: 'Pittsburgh', addressRegion: 'Pennsylvania', postalCode: '15202', addressCountry: 'US'
          }
        }]
      }
    },
    shipment: {
      type: 'ParcelDelivery',
      deliveryMethod: 'Ocean transport',
      trackingNumber: '633689273400',
      originAddress: {
        type: 'PostalAddress', organizationName: 'Lynch Inc', streetAddress: '6290 Jamaal Squares', addressLocality: 'Elroyborough', addressRegion: 'Virginia', postalCode: '93112', addressCountry: 'Uzbekistan'
      },
      deliveryAddress: {
        type: 'PostalAddress', organizationName: 'Heller, Bernier and Robel', streetAddress: '44591 Laurie Squares', addressLocality: 'Kamronburgh', addressRegion: 'Hawaii', postalCode: '10219-0201', addressCountry: 'Niue'
      }
    },
    inspection: {
      type: 'InspectionReport',
      comment: 'This product spray coated in anti corrosive film which must be removed before use.',
      observation: [{
        type: 'Observation',
        property: {
          type: 'ChemicalProperty', name: 'Rhenium', formula: 'Re', inchi: 'InChI=1S/Re', inchikey: 'WUAPFZMCVAUBPE-UHFFFAOYSA-N'
        },
        measurement: { type: 'MeasuredValue', value: '17.035', unitCode: 'P1' }
      }, {
        type: 'Observation',
        property: {
          type: 'MechanicalProperty', identifier: 'ISO 1352', name: 'Torque-controlled fatigue testing', description: 'ISO 1352:2011 specifies the conditions for performing torsional, constant-amplitude, nominally elastic stress fatigue tests on metallic specimens without deliberately introducing stress concentrations. The tests are carried out at ambient temperature (ideally at between 10 °C and 35 °C) in air by applying a pure couple to the specimen about its longitudinal axis.'
        },
        measurement: { type: 'MeasuredValue', value: '00.00', unitCode: 'UNKNOWN' }
      }, {
        type: 'Observation',
        property: {
          type: 'ChemicalProperty', name: 'Helium', formula: 'He', inchi: 'InChI=1S/He', inchikey: 'SWQJXJOGLNCZEY-UHFFFAOYSA-N'
        },
        measurement: { type: 'MeasuredValue', value: '25.856', unitCode: 'P1' }
      }, {
        type: 'Observation',
        property: {
          type: 'ChemicalProperty', name: 'Antimony', formula: 'Sb', inchi: 'InChI=1S/Sb', inchikey: 'WATWJIUSRGPENY-UHFFFAOYSA-N'
        },
        measurement: { type: 'MeasuredValue', value: '13.803', unitCode: 'P1' }
      }, {
        type: 'Observation',
        property: {
          type: 'MechanicalProperty', identifier: 'ISO 1352', name: 'Torque-controlled fatigue testing', description: 'ISO 1352:2011 specifies the conditions for performing torsional, constant-amplitude, nominally elastic stress fatigue tests on metallic specimens without deliberately introducing stress concentrations. The tests are carried out at ambient temperature (ideally at between 10 °C and 35 °C) in air by applying a pure couple to the specimen about its longitudinal axis.'
        },
        measurement: { type: 'MeasuredValue', value: '00.00', unitCode: 'UNKNOWN' }
      }, {
        type: 'Observation',
        property: {
          type: 'ChemicalProperty', name: 'Einsteinium', formula: 'Es', inchi: 'InChI=1S/Es', inchikey: 'CKBRQZNRCSJHFT-UHFFFAOYSA-N'
        },
        measurement: { type: 'MeasuredValue', value: '6.1692', unitCode: 'P1' }
      }, {
        type: 'Observation',
        property: {
          type: 'MechanicalProperty', identifier: 'ISO 3738', name: 'Rockwell Hardness Test (Scale A)', description: 'The Rockwell hardness test is an empirical indentation hardness test that can provide useful information about metallic materials.'
        },
        measurement: { type: 'MeasuredValue', value: '00.00', unitCode: 'UNKNOWN' }
      }, {
        type: 'Observation',
        property: {
          type: 'ChemicalProperty', name: 'Curium', formula: 'Cm', inchi: 'InChI=1S/Cm', inchikey: 'NIWWFAAXEMMFMS-UHFFFAOYSA-N'
        },
        measurement: { type: 'MeasuredValue', value: '6.3632', unitCode: 'P1' }
      }, {
        type: 'Observation',
        property: {
          type: 'ChemicalProperty', name: 'Holmium', formula: 'Ho', inchi: 'InChI=1S/Ho', inchikey: 'KJZYNXUDTRRSPN-UHFFFAOYSA-N'
        },
        measurement: { type: 'MeasuredValue', value: '30.773', unitCode: 'P1' }
      }, {
        type: 'Observation',
        property: {
          type: 'MechanicalProperty', identifier: 'ISO 180', name: 'Izod Impact Strength Test', description: 'ISO 180 defines the method used for pendulums to determine the impact resistance of a plastic specimen when supported in a cantilever configuration. Test results are used to evaluate the resilience of materials, typically plastics.'
        },
        measurement: { type: 'MeasuredValue', value: '43.906', unitCode: 'B13' }
      }]
    }
  };
  const validate = ajv.compile(schemas.CertifiedMillTestReport);
  const validateResult = validate(example);
  if (process.env.VERBOSE_BUILD_STEEL) {
    console.log('Early Validation results from CertifiedMillTestReport:', validateResult);
  }
  return example;
};

module.exports = { getCertifiedMillTestReport };
