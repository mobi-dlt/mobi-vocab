const { getVID } = require('./VID');
const { getBatteryID } = require('./BatteryID');

const getPermissions = () => {
    const vidNumber = getVID();
    delete vidNumber['@context'];
    const batteryIdentifier = getBatteryID();
    delete batteryIdentifier['@context'];

    const example = {
        '@context': ['https://goodlookingtech.com'],
        type: 'Permissions',
        userLocation: 'true',
        vehicleLocation: 'true',
        vid: 'true',
        batteryid: 'true',
        dataSharingForRewards: 'true'
    };
    return example;
};

module.exports = { getPermissions };
