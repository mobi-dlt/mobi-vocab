const faker = require('faker');

const getDecision = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'Decision',
        decision: 'Granted',
        decisionEngineOrProcess: 'Automated',
        decisionSequence: '1902398',
        decisionAutomatedOrManual: 'Automated',
        decisionTimestamp: '2020-10-17',
        decisionAnalystID: '23875982374',
        decisionAnalystName: 'Tony',
        decisionComments: 'none',
        conditionalAcceptanceCriteria: 'test',
        conditionedOrRejectedReason: 'none'
    };
    return example;
};

module.exports = { getDecision };
