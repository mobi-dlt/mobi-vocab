const getTimeDependentSmartEnergyTariffs = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schmea/schemas'],
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
