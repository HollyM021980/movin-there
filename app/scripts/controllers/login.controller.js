angular.module('MovnThereUI')
  .controller('LoginCtrl', [
      '$scope',
      '$location',
      'AuthFactory',
      function($scope, $location, AuthFactory) {
        'use strict';

        $scope.login = function(credentials) {
          AuthFactory.login(credentials).success(function(response) {
            $location.path('/');
          });
        };

        $scope.goToSignup = function(){
          $location.path('/signup');
        };
      }
  ]
);
