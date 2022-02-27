const faker = require('faker');

const getVcSchemaForInsuranceClaimsAndPolicies = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schemas'],
        type: 'VcSchemaForInsuranceClaimsAndPolicies',
        driverId: 'test',
        driverName: 'test',
        driverPostalAddress: 'test',
        driverOccupation: 'test',
        financialAccount: 'test',
        insuranceClaimNumber: 'test',
        insuranceCompany: 'test',
        insurancePolicyNumber: 'test',
        counterpartInsurancePolicyNumber: 'test',
        counterpartInsuranceCompany: 'test',
        insuranceType: 'test',
        vid: 'test',
        dateTime: 'test',
        geolocation: 'test',
        participantType: 'test',
        numberOfParticipants: 'test',
        otherParticipantInformation: 'test',
        claimType: 'test',
        textualDescription: 'test',
        policeReportNumber: 'test',
        damageValue: 123,
        repairDurationInDays: 2,
        // otherVehicleId: 'test',
        repairFacilityId: 1,
        fault: 'test',
        carrier: 'test',
        policyNumber: 'test',
        effectiveDate: 'test',
        jurisdictionSpecificRequirement: 'test',
    };
    return example;
};

module.exports = { getVcSchemaForInsuranceClaimsAndPolicies };

/**
 *  Need to ask Matt what to do.. issue with the url as it was already used in vid (attribute)
 *
 * "otherVehicleId": {
            "$comment": "{\"term\": \"vid\", \"@id\": \"https://dlt.mobi/mobility-schema#VID\"}",
            "title": "vid",
            "description": "Logo of the entity."
        }
 */
