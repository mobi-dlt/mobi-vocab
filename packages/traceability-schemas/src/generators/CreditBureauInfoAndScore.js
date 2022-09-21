const faker = require('faker');

const getCreditBureauInfoAndScore = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'CreditBureauInfoAndScore',
        creditBureau: 'Equifax',
        creditPullSequenceNumber: '09328409751',
        equifaxIdentifier: 'nslfvgn93487598',
        experianIdentifier: 'nslfvgn93487598',
        transUnionIdentifier: 'nslfvgn93487598',
        obligorCreditScore: '700',
        creditScoreModelType: 'test',
        creditPullDate: '2022.02.02',
        previousCreditInquiryName: 'Credit Card Provider',
        previousCreditInquiryDate: '2022.02.02'
    };
    return example;
};

module.exports = { getCreditBureauInfoAndScore };
