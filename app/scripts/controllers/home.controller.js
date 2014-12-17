angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'uiGmapGoogleMapApi',
    'TypeAheadFactory',
    function($scope, GoogleMapApi, TypeAheadFactory) {
      'use strict';


      // Initial location

      // debugger;
      $scope.latitude = 42.3584865;
      $scope.longitude = -71.060097;

        $scope.onSelect = function ($item, $model) {

        debugger;
          $scope.latitude = $item.location.lat;
          $scope.longitude = $item.location.lng;
          $scope.city = $item.formatted_address;
          $scope.marker.coords.latitude = $item.location.lat;
          $scope.marker.coords.longitude = $item.location.lng;
          $scope.map.control.refresh({latitude: $scope.latitude, longitude: $scope.longitude});
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

        // Map
        $scope.map = {
          center: {
            latitude: $scope.latitude,
            longitude: $scope.longitude
          },
          zoom: 12,
          control: {}
        }

        $scope.marker = {
          idKey: 1,
          coords: {
            latitude: $scope.latitude,
            longitude: $scope.longitude
          },
          control: {}
        }


        $scope.getCitiesInRadius = function(location) {

        };

      }
    ]
  );
