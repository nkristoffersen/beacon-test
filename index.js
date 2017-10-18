const Bleacon = require('bleacon');

function startBeacon() {
  // var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0'; //sporty place
  var uuid = 'e2c56db5-dffb-48d2-b060-d0f5a71096e0'; //sporty place
  var major = 2222; // 0 - 65535 /place court
  var minor = 2017; // 0 - 65535 / court beacon
  var measuredPower = -70; // -128 - 127 (measured RSSI at 1 meter)
  //var measuredPower = -128; // -128 - 127 (measured RSSI at 1 meter)
  console.log(getCurrentTimestamp() + ' starting beacon!', uuid, major, minor, measuredPower);
  Bleacon.startAdvertising(uuid, major, minor, measuredPower);
};
startBeacon();
