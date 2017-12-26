/** Views (webpack issue) */
var templateHeader = require('../views/partials/terminal-header.html');
var templateKeyboard = require('../views/partials/terminal-keyboard.html');

angular.module('TerminalDirectives', [])
    .directive('terminalHeader', terminalHeader)
    .directive('terminalKeyboard', terminalKeyboard)

/** @ngInject Terminal Header */
function terminalHeader() {
    return {
        restrict: 'E',
        templateUrl: templateHeader,
    }
}

/** @ngInject Terminal Keyboard */
function terminalKeyboard() {
    return {
        restrict: 'E',
        templateUrl: templateKeyboard,
    }
}