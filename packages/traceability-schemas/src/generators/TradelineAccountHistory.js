const faker = require('faker');

const getTradelineAccountHistory = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'TradelineAccountHistory',
        tradelineSequenceNumber: '280399742',
        accountHistoryYearAndMonth: '2022 May',
        delinquencyStatus: 'True'

    };
    return example;
};

module.exports = { getTradelineAccountHistory };
