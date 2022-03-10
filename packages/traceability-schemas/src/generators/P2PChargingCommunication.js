const getP2PChargingCommunication = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'P2PChargingCommunication',
        DateTime: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        EnergyExchange: 'uri',
        RecipientBuyerUserID: 'sampleuri',
        RecipientBuyerVehicleID: 'target EID',
        SellerUserID: 'algo',
        TransactionGeocoordinates: 'VehicleGeocoordinates',
        Cost: 'Cost',
        SellerVehicleID: 'SellerVehicleID',
        EnergySource: 'EnergySource'
    };
    return example;
};

module.exports = { getP2PChargingCommunication };
