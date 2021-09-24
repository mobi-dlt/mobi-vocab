const getLinkRole = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility'],
    type: 'LinkRole',
    target: 'https://example.com/related/link/123',
    linkRelationship: 'alternate',
  };
  return example;
};

module.exports = { getLinkRole };
