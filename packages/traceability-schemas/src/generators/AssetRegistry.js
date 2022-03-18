const getAssetRegistry = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'AssetRegistry',
        AssetID: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        OwnerID: 'OwnerID',
        Classification: 'Classification',
        VehicleDesignation: 'VehicleDesignation',
        SystemID: 'SystemID',
        OrganizationFEIN: 'OrganizationFEIN',
        EPACompanyID: 'EPACompanyID',
    };
    return example;
};

module.exports = { getAssetRegistry };
