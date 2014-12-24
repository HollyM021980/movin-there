angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'uiGmapGoogleMapApi',
    'TypeAheadFactory',
    function($scope, GoogleMapApi, TypeAheadFactory) {
      'use strict';


      // Initial location
      $scope.latitude = 42.3584865;
      $scope.longitude = -71.060097;
      $scope.city = "Boston, MA, USA"

      $scope.onSelect = function ($item, $model) {
        $scope.latitude = $item.location.lat;
        $scope.longitude = $item.location.lng;
        $scope.city = $item.formatted_address;
        $scope.map.marker.city = $scope.city;
        $scope.map.marker.coords.latitude = $scope.latitude;
        $scope.map.marker.coords.longitude = $scope.longitude;
        $scope.map.control.refresh({latitude: $scope.latitude, longitude: $scope.longitude, city: $scope.city});
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
      };

      $scope.map.marker = {
        idKey: 1,
        coords: {
          latitude: $scope.latitude,
          longitude: $scope.longitude
        },
        city: $scope.city,
        icon: "styles/images/map-pin-sm.png",
        showWindow: false,
        control: {}
      };



        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };


}]);
