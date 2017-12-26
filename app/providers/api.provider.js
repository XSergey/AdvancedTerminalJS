angular.module('Terminal')
    /*.config('apiProvider', [function ($stateProvider) {
        $stateProvider.state('users.profile', {
            url: '/:id',
            templateUrl: 'views/users.profile.html',
            controller: 'UsersController',
            resolve: {
              user: function($stateParams, UserService) {
                return UserService.find($stateParams.id);
              },
              tasks: function(TaskService, user) {
                return user.canHaveTasks() ?
                  TaskService.find(user.id) : [];
              }
            }
        });
    }])*/
    .provider('apiProvider', function () {
        /** Provider $get issue */
        this.$get = angular.noop;
    })