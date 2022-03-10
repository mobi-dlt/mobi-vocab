const { getMeter } = require('./Meter');
const { getVID } = require('./VID');

const getCarbonOffset = () => {
    const meterInfo = getMeter();
    delete meterInfo['@context'];
    const vid = getVID();
    delete vid['@context'];
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
        type: 'CarbonOffset',
        CarbonIntensity: 'CarbonIntensity',
        CarbonIntensitySource: 'CarbonIntensitySource',
        ChargeStartTime: 'ChargeStartTime',
        ChargeEndTime: 'ChargeEndTime',
        InfrastructureOwnerEntityID: 'InfrastructureOwnerEntityID',
        ChargingDataSource: 'ChargingDataSource',
        CreditOwnerAccount: 'CreditOwnerAccount',
        EnergyConsumed: 'EnergyConsumed',
        ChargeSessionGeolocation: 'ChargeSessionGeolocation',
        TranscationDateTime: 'TranscationDateTime',
        VID: vid,
        ChargerID: ' ChargerID',
        ChargeRate: 'ChargeRate',
        OrganizationTaxID: 'OrganizationTaxID',
        ResidentialIncrementalVSNonResidential: 'ResidentialIncrementalVSNonResidential',
        DesignationOfVehicle: 'DesignationOfVehicle',
        EnergyEconomyRatio: 'EnergyEconomyRatio',
        EPACompanyID: 'EPACompanyID',
        // meter: meterInfo,
        SystemID: 'SystemID',
        TransactionNumber: 'TransactionNumber',
        TransactionType: 'TransactionType'
    };
    return example;
};

module.exports = { getCarbonOffset };
