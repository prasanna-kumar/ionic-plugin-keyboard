
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel');


var IonicKeyboard = function() {
};

IonicKeyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "IonicKeyboard", "hideKeyboardAccessoryBar", [hide]);
};

IonicKeyboard.close = function() {
    exec(null, null, "IonicKeyboard", "close", []);
};

IonicKeyboard.show = function() {
    exec(null, null, "IonicKeyboard", "show", []);
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

channel.onCordovaReady.subscribe(function() {
    exec(success, null, 'IonicKeyboard', 'init', []);

    function success(msg) {
        var action = msg.charAt(0);
        if ( action === 'S' ) {
            var keyboardHeight = msg.substr(1);
            cordova.plugins.IonicKeyboard.isVisible = true;
            cordova.fireWindowEvent('native.keyboardshow', { 'keyboardHeight': + keyboardHeight });

            //deprecated
            cordova.fireWindowEvent('native.showkeyboard', { 'keyboardHeight': + keyboardHeight });
        } else if ( action === 'H' ) {
            cordova.plugins.IonicKeyboard.isVisible = false;
            cordova.fireWindowEvent('native.keyboardhide');

            //deprecated
            cordova.fireWindowEvent('native.hidekeyboard');
        }
    }
});

module.exports = IonicKeyboard;



