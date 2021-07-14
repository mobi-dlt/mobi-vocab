const { generator, schemas } = require('../data/util/data');

const ajv = generator.getAjv();

const { getOrganization } = require('./Organization');
const { getBatteryID } = require('./BatteryID');

const getBatterySOHCertificate = () => {
  const chargingProvider = getOrganization();
  delete chargingProvider['@context'];

  const subject = getBatteryID();
  delete subject['@context'];

  // Retain old version link:
  // https://github.com/w3c-ccg/traceability-vocab/blob/1397920e6e23893577753f7f51e4a9c786a746ee/docs/credentials/CertifidMillTestReportCredential.json
  const example = {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://mobinet.io/schemas/v1',
    ],
    id: 'https://example.com/credential/123',
    type: ['VerifiableCredential', 'BatterySOHCertificate'],
    name: 'Battery SOH Certificate',
    description: 'This document includes recommended Battery ID fields.',
    relatedLink: [
      {
        type: 'LinkRole',
        target: 'did:example:789',
        linkRelationship: 'commercialInvoiceLink',
      },
      {
        type: 'LinkRole',
        target: 'https://www.example.com/template/123',
        linkRelationship: 'BatteryIDLink',
      },
    ],
    issuanceDate: '2019-12-11T03:50:55Z',
    issuer: {
      id: 'did:example:123',
      ...chargingProvider,
    },
    credentialSubject: subject,
  };

  const validate = ajv.compile(schemas.BatterySOHCertificate);
  const validateResult = validate(example);
  if (process.env.VERBOSE_BUILD_STEEL) {
    console.log(
      'Early Validation results from BatterySOHCertificate:',
      validateResult
    );
  }
  return example;
};

module.exports = { getBatterySOHCertificate };
