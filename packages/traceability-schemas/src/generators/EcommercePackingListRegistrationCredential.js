const { getEcommercePackingListItem } = require('./EcommercePackingListItem');

const getEcommercePackingListRegistrationCredential = () => {
  const itemlist = getEcommercePackingListItem();
  delete itemlist['@context'];
  const items = [];
  items.push(itemlist);

  const example = {
    '@context': ['https://mobinet.io/schemas/v1'],
    type: 'EcommercePackingListRegistrationCredential',
    packageItems: items,
    certificateName: 'ACME Ecommerce Packing List Registration Certificate',
  };

  return example;
};

module.exports = { getEcommercePackingListRegistrationCredential };
