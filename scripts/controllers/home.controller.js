angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'UserFactory',
    function($scope, UserFactory) {
      'use strict';

      $scope.users = UserFactory.users;
    }
  ]
);
