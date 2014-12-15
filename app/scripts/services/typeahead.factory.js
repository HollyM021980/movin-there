angular.module('MovnThereUI')
  .factory('TypeAheadFactory', [
    '$scope',
    '$http',
    'GglKey',
    function($scope, $http, GglKey) {

      $scope.selected = undefined;

      $scope.getLocation = function(val) {
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: val,
            sensor: false,
            key: GglKey
          }
        }).then(function(response){
          return response.data.results.map(function(item){
            return item.formatted_address;
          });
        });
      };
    }
  ]
});
