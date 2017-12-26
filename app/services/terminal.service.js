"use strict"

angular.module('Terminal')

.constant('ENDPOINT_URI', '/api/v1/terminal')

.service('terminalService', ['$http', function ($http, ENDPOINT_URI) {
    return {
        getUrl : function() {
            return ENDPOINT_URI;
        },
        getMobileProviders : function() {
            //return $http.get(this.getUrl());
        },    
        getMobileProvider : function (id) {
            return $http.get(this.getUrl() + '/' + id);
        },    
        sendPhoneNumber : function(phoneNumber) {
            return $http.post(this.getUrl() + '/send-phone-number', phoneNumber);
        }
    }
}])