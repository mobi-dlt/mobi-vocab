const faker = require('faker');

const getTradelines = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'Tradelines',
        tradelineSequenceNumber: '280399742',
        lenderName: 'Lendername',
        lenderAddress: '1800 Test Way',
        lenderCity: 'CityName',
        lenderState: 'StateName',
        lenderCountry: 'Test',
        lenderPostalCode: '00000',
        lenderPhoneNumber: '(425) 123-4567',
        partialAccountNumber: '20893740983',
        accountTypeDigitizedCode: 'TC',
        accountType: 'Checking',
        accountOpenDate: '01.01.22',
        lastActivityDate: '10.10.22',
        currentBalance: '1',
        creditLimitorLoanAmount: '2',
        billingDate: '10.10.21',
        lastPaymentAmount: '1',
        systemCurrency: 'USD',
        termDuration: '48',
        termFrequencyDigitizedCode: 'TC2',
        termFrequency: 'bimonthly',
        monthlyPayment: '2',
        currentAccountStatusDigitzedCode: 'OK',
        currentAccountStatus: 'okay',
        lastStatusUpdateDate: '11.12.13',
        firstReportDate: '11.11.11',
        firstDeliquencyDate: '12.11.11',
        responsibility: 'to each other',
        pastDueAmount: '1',
        originalChargeOffAmount: '0'

    };
    return example;
};

module.exports = { getTradelines };
