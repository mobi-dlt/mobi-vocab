const getmobiNETIdentity = () => {
    const example = {
      '@context': ['https://goodlookingtech.com'],
      type: 'mobiNETIdentity',
      membershipID: '64bitstring'
    };
    return example;
  };
  module.exports = { getmobiNETIdentity };
