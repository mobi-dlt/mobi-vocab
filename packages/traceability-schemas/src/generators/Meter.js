const getMeter = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility'],
        type: 'Meter',
        Make: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        Model: 'model',
        ChargeRate: 'ChargeRate',
        GeoCoordinates: 'GeoCoordinates',
        MeterUniqueIdentifier: 'MeterUniqueIdentifier',
        SerialModel: 'SerialModel',
        MeterEndOfLifeEventRegistraion: 'MeterEndOfLifeEventRegistraion',
        ProductionDate: 'ProductionDate',
        MeterSoftwareVersion: 'MeterSoftwareVersion',
        ConformanceToStandards: 'ConformanceToStandards',
        MeterAdminID: 'MeterAdminID',
        MeterCurrentRating: ' MeterCurrentRating',
        MeterForm: 'MeterForm',
        MeterRecords: ' MeterRecords',
        RemoteDisconnectCapability: 'RemoteDisconnectCapability'
    };
    return example;
};

module.exports = { getMeter };
