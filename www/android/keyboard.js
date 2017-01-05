
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var IonicKeyboard = function() {
};

IonicKeyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "IonicKeyboard", "hideKeyboardAccessoryBar", [hide]);
};

IonicKeyboard.close = function() {
    exec(null, null, "IonicKeyboard", "close", []);
};

IonicKeyboard.show = function() {
    console.warn('Showing keyboard not supported in iOS due to platform limitations.')
    console.warn('Instead, use input.focus(), and ensure that you have the following setting in your config.xml: \n');
    console.warn('    <preference name="KeyboardDisplayRequiresUserAction" value="false"/>\n');
    // exec(null, null, "IonicKeyboard", "show", []);
};

IonicKeyboard.disableScroll = function(disable) {
    exec(null, null, "IonicKeyboard", "disableScroll", [disable]);
};

/*
Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
};
*/

IonicKeyboard.isVisible = false;

module.exports = IonicKeyboard;



