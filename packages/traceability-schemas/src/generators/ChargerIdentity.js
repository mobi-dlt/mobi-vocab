const getChargerIdentity = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'ChargerIdentity',
        Make: 'charger manufac',
        Model: 'model',
        ChargerAdapterStandard: 'CHAdeMO',
        ACDCType: 'AC',
        UniBiDirectional: 'Uni',
        ChargeRate: 'ChargeRate',
        ChargerSoftwareVersion: 'ChargerSoftwareVersion',
        ChargerUniqueIdentifier: 'ChargerUniqueIdentifier',
        ChargerStationIdentifier: 'stationIdentifier',
        GeoCoordinates: 'GeoCoordinates',
        Voltage: '200',
        Cost: 'Cost',
        Availability: 'Yes',
        ProductionDate: 'ProductionDate',
        ChargeTransmissionType: 'Wired',
        WirelessChargingType: 'NA',
        ChargingStructureType: 'NA',
    };
    return example;
};

module.exports = { getChargerIdentity };
