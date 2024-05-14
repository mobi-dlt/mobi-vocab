const faker = require('faker');

faker.seed(42);

const getCompLabelCert = () => {
  // Get organization
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'CompLabelCert',
    euConformityDeclarationDocument: 'link to report',
    euConformityDeclarationID: 'did:mobinet:123456789abcdefghi',
    euComplianceTestResultsReport: 'link to report',
    separateCollectionSymbol: 'link to report',
    labelsSymbolsMeaning: 'link to report',
    cadmiumLeadSymbols: 'link to report',

  };
  return example;
};

module.exports = { getCompLabelCert };
