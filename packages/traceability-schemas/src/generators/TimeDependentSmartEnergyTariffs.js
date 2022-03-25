const getTimeDependentSmartEnergyTariffs = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'TimeDependentSmartEnergyTariffs',
        Date: 'date',
        SOC: 'soc',
        TimeOfDay: 'TimeOfDay',
        Amount: 'Amount',
        CarbonIntensity: 'arbonIntensity',
        PaymentCurrencyType: 'PaymentCurrencyType',
    };
    return example;
};

module.exports = { getTimeDependentSmartEnergyTariffs };
