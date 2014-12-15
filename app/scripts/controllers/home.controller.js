angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'TypeAheadFactory',
    function($scope, TypeAheadFactory) {
      'use strict';


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
