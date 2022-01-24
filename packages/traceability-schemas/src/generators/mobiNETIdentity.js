const getmobiNETIdentity = () => {
    const example = {
      '@context': ['https://dlt.mobi/mobility-schema'],
      type: 'mobiNETIdentity',
      membershipID: '64bitstring'
    };
    return example;
  };
  module.exports = { getmobiNETIdentity };
