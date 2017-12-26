angular.module('Terminal')
    .factory('apiFactory', ['$http', function($http) {

    var urlBase = '/api/v1/services';
    var dataFactory = {};

    apiFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    apiFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    apiFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    apiFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    apiFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    apiFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return apiFactory;
}]);