const getVehicleToGridCommunication = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'VehicleToGridCommunication',
        DateTime: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        EnergyExchange: 'uri',
        RecipientBuyerUserID: 'sampleuri',
        RecipientBuyerVehicleID: 'target EID',
        SellerUserID: 'algo',
        UtilityIdentifier: ' expired',
        VehicleGeocoordinates: 'VehicleGeocoordinates',
        Cost: 'Cost',
        SellerVehicleID: 'SellerVehicleID',
        DateOfLastChargeDischarge: 'DateOfLastChargeDischarge',
        EnergyAvaliable: 'EnergyAvaliable',
        EnergySource: 'EnergySource'

    };
    return example;
};

module.exports = { getVehicleToGridCommunication };
