/** Views (webpack issue) */
var templateKeyboard = require('../views/partials/terminal-keyboard.html');

angular.module('TerminalpDirectives', [])
    .directive('terminalKeyboard', terminalKeyboard);

/** @ngInject */
function terminalKeyboard() {
    return {
        restrict: 'E',
        templateUrl: templateKeyboard,
    }
}