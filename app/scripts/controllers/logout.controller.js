angular.module('MovnThereUI')
  .controller('LogoutCtrl', [
    '$scope',
    '$location',
    'AuthFactory',
    function($scope, $location, AuthFactory) {
      'use strict';

      $scope.logout = function(credentials) {
        AuthFactory.login(credentials).success(function(response) {
          $location.path('/');
        });
      };
    }
  ]
);
