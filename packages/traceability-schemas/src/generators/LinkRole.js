const getLinkRole = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
    type: 'LinkRole',
    target: 'https://example.com/related/link/123',
    linkRelationship: 'alternate',
  };
  return example;
};

module.exports = { getLinkRole };
