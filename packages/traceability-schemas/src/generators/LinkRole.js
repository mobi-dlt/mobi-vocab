const getLinkRole = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility-schema'],
    type: 'LinkRole',
    target: 'https://example.com/related/link/123',
    linkRelationship: 'alternate',
  };
  return example;
};

module.exports = { getLinkRole };
