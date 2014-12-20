angular.module('MovnThereUI')
  .controller('UserCtrl', [
    '$scope',
    'UserFactory',
    function($scope, UserFactory) {
      'use strict';

      UserFactory.fetch();
      $scope.users = UserFactory.users;
    }
  ]
);
