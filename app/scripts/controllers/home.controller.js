angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
      'use strict';


      $scope.getLocation = function(val) {
          return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
            headers: {
              'Accept':  'application/json, text/plain, * / *',
              'Authorization': undefined
            },
            params: {
              address: val,
              sensor: false
            }
          }).then(function(response){
            return response.data.results.map(function(item){
              return item.formatted_address;
            });
          });
        };
      }
    ]
  );
