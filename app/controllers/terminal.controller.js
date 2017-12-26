/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('Terminal')
    .controller('terminalController', ["$scope", '$http', '$location', 'terminalService', function($scope, $http, $location, terminalService) {

        $scope.mobileProviders = /*terminalService.getMobileProviders();*/
        [{
            "mpName" : "Билайн",
            "mpAlias" : "bilain",
            "mpIcon" : "http://www.softrew.ru/uploads/posts/2016-07/1468309578_kak-perevesti-dengi-s-bilayna-na-bilayn.png"
        }]
    
        
        /*$scope.getMobileProviders = function() {
            return $http.get('/api/mobile_providers')
                    .success(function(data) {
                        $scope.mobileProviders = data;
                    })
                    .error(function() {
                    });
        }*/
    
    
        /** Proceed to enter phone number */
        $scope.chooseMobileProvider = function(mpAlias) {
            $location.path('/services/'+mpAlias)
        }
}])
