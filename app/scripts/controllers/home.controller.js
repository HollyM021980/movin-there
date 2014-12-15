angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'TypeAheadFactory',
    function($scope, TypeAheadFactory) {
      'use strict';

        $scope.onSelect = function ($item) {
          debugger;
          $scope.$item = $item;

          // Get geo info about the place
         };

        $scope.getLocation = function(val) {

            return TypeAheadFactory.getLocation(val).then(function(res){
                var addresses = [];
                angular.forEach(res.data.results, function(item){
                    addresses.push(item.formatted_address);
                });
                return addresses;
            });
        };
      }
    ]
  );
