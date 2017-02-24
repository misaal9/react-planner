/*
* Contains information of logged in user
*/
let userDetails = {};

function getUserInfo() {
    console.info('getUserInfo', userDetails);
    return userDetails;
}

function setUserInfo(user) {
    userDetails = user;
}

exports.getUserInfo = getUserInfo;

exports.setUserInfo = setUserInfo;