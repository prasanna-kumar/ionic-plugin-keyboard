
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var IonicKeyboard = function() {
};

IonicKeyboard.hideKeyboardAccessoryBar = function(hide) {
    return null;
};

IonicKeyboard.close = function() {
    return null;
};

IonicKeyboard.show = function() {
    return null;
};

IonicKeyboard.disableScroll = function(disable) {
    return null;
};

/*
IonicKeyboard.styleDark = function(dark) {
 exec(null, null, "IonicKeyboard", "styleDark", [dark]);
};
*/

IonicKeyboard.isVisible = false;

module.exports = IonicKeyboard;
