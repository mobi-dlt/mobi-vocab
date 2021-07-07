const getLinkRole = () => {
  const example = {
    '@context': ['https://mobinet.io/schemas/v1'],
    type: 'LinkRole',
    target: 'https://example.com/related/link/123',
    linkRelationship: 'alternate',
  };
  return example;
};

module.exports = { getLinkRole };
