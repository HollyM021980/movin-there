angular.module('MovnThereUI')
.controller('PointInfoCtrl', function ($scope) {
  $scope.templateValue = 'hello from the template itself';
  $scope.clickedButtonInWindow = function () {
    var msg = 'Future: display place and census data';
    alert(msg);
  }
});
