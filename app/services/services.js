var service = angular.module("Terminal");
service.factory("httpService", ["$http", function($http){
    var methods = {
        'call': function (type, url, params, data) {
            return $http({ method: type, url: url, params: params, data: data }).success(methods.success).error(methods.errorModal);
        },
        'success': function (data) {
            if (data.Message)
                utils.confirm({ msg: lang[data.Message], ok: lang.ok });
            return data;
        },
        'errorModal': function (data) {
            $uibModal.open({
                templateUrl: 'utils-errorModal ',
                backdrop: "static",
                controller: "errorModal",
                resolve: {
                    error: function () {
                        return data;
                    }
                }
            });
        },
        'get': function (url, params) {
            return methods.call('GET', url, params);
        },
        'put': function (url, data) {
            return methods.call('PUT', url, null, data);
        },
        'post': function (url, data) {
            return methods.call('POST', url, null, data);
        },
        'delete': function (url, data) {
            //return methods.call('DELETE', url, data, null);
        }
    }
    return methods;
}]);
service.factory("mobilesService", ["http", function (http) {
    var methods = {
        list: {
            "get": function (param) {
                return http.get("/users/", param);
            },
            "delete": function (id) {
                return http.delete("/users/" + id);
            }
        },
        form: {
            "get": function (id) {
                return http.get("/services/" + id);
            },
            "put": function (param) {
                return http.put("/services/" + param.Id, param);
            },
            "post": function (param) {
                return http.post("/services/", param);
            },
        }
    };
    return methods;
}]);
service.factory("linkService", [function () {
    var links = [];
    links.push({
        name: 'Mobile Services', urls: [
            { link: '/services/list', title: 'List' },
            { link: '/services/form', title: "Form" },
        ]
    });
    links.push({
        name: 'Service Process', urls: [
             { link: '/services/list', title: "List" },
             { link: '/services/list', title: "List" }
        ]
    });
    return links;
}]);