/*
* Contains information of logged in user
*/
let userDetails = {};

function getUserInfo() {
    return userDetails;
}

function setUserInfo(user) {
    userDetails = user;
}

exports.getUserInfo = getUserInfo;

exports.setUserInfo = setUserInfo;