"use strict";

/** SCSS files not loaded (webpack issue) */
require('../public/theme/css/bootstrap.min.css')
require('../public/theme/css/demo.css')
require('../public/theme/css/now-ui-kit.css')
require('../public/assets/styles.css')

/** Api Mock source file (webpack issue) */
require('../node_modules/angular-apimock/dist/angular-apimock.min.js')

var App = angular.module("Terminal", [
  "ngRoute",
  "ngResource",
  "ngCookies",
  'ui.bootstrap',
  "ui.mask",
  'apiMock',
  //"terminalController",
  //"TerminalProviders",
  "TerminalDirectives",
  //"TerminalServices",
])