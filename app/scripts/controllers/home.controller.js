angular.module('MovnThereUI').controller('HomeCtrl', function($scope, UserFactory) {
  'use strict';

  $scope.users = UserFactory.users;
});
