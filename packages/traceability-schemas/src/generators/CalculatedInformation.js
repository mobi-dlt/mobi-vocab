const faker = require('faker');

const getCalculatedInformation = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'CalculatedInformation',
        adjustedCreditScore: '800',
        debtToIncomeRatio: '2',
        paymentToIncomeRatio: '1',
        loanToValueRatio: '3',
        tierNumber: '3'
    };
    return example;
};

module.exports = { getCalculatedInformation };
