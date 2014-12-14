angular.module('MovnThereUI')
  .controller('UserCtrl', [
    '$scope',
    'UserFactory',
    function($scope, UserFactory) {
      'use strict';

      $scope.users = UserFactory.users;
    }
  ]
);
