/** Views (webpack issue) */
var templateServices = require('./views/services.html');
var templateService = require('./views/service.html');

angular.module('Terminal')
    .config([
        '$routeProvider', 
        '$locationProvider', 
        'uiMask.ConfigProvider', 
        //'apiProvider',
        'apiMockProvider',
    function ($routeProvider, $locationProvider, uiMaskConfigProvider, apiMockProvider) {
        var route = $routeProvider;
        var location = $locationProvider;

        /** use the HTML5 History API */
        $locationProvider.html5Mode(true);

        /** UI Mask */
        uiMaskConfigProvider.maskDefinitions({'A': /[0-9]/, '*': /[0-9]/});
        uiMaskConfigProvider.clearOnBlur(false);
        uiMaskConfigProvider.eventsToHandle(['input', 'keyup', 'click']);

        /** @Injected Api*/
        /*apiMockProvider.config({
            mockDataPath: '/warehouse/mock_data',
            apiPath: '/api',
        });*/

        route.when("/services", {
            controller: 'terminalController',
            templateUrl: templateServices
        })
        .when("/services/:id", {
            controller: 'terminalController',
            templateUrl: templateService
        })
        .when("/users/form/", {
            controller: 'TerminalController',
            templateUrl: '/users-form'
        })
        .when("/users/form/:id", {
            controller: 'usersForm',
            templateUrl: '/users-form'
        })
        .when("/roles/list", {
            controller: 'roles',
            templateUrl: '/roles-list'
        })
        .when("/functions/list", {
            controller: 'functions',
            templateUrl: '/functions-list'
        })
        .when("/", {
            redirectTo: '/services'
        })
        .otherwise({
            //templateUrl: '/utils-404'
        });
    }]);
