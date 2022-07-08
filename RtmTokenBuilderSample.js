const RtmTokenBuilder = require('./RtmTokenBuilder').RtmTokenBuilder;
const RtmRole = require('./RtmTokenBuilder').Role;
const Priviledges = require('./AccessToken').priviledges;
const appID  = "";
const appCertificate = "";
const account = "test_123";

const expirationTimeInSeconds = 3600 * 24;
const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

const token = RtmTokenBuilder.buildToken(appID, appCertificate, account, RtmRole, privilegeExpiredTs);

console.log("Rtm Token: " + token);