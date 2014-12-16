angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'TypeAheadFactory',
    function($scope, TypeAheadFactory) {
      'use strict';

        $scope.onSelect = function ($item, $model) {
          $scope.$item = $item;
          $scope.$model = $model;

          // Get geo info about the place
         };

        $scope.getLocation = function(val) {

            return TypeAheadFactory.getLocation(val).then(function(res){
                var addresses = [];
                angular.forEach(res.data.results, function(item){
                    addresses.push({
                      formatted_address: item.formatted_address,
                      location: item.geometry.location
                      })
                });
                return addresses;
            });
        };

        $scope.getCitiesInRadius = function(location) {

        };

      }
    ]
  );
