angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'uiGmapGoogleMapApi',
    'TypeAheadFactory',
    'uiGmapIsReady',
    function($scope, GoogleMapApi, TypeAheadFactory, IsReady) {
      'use strict';


      GoogleMapApi.then(function(maps) {
        maps.visualRefresh = true;

      });

      IsReady.promise().then(function (maps) {
        maps.forEach(function(inst){
          debugger;
          var map = inst.map;
          var mapInstanceNumber = inst.instance; // Starts at 1.
          // $scope.placesService = new google.maps.places.PlacesService(map);
        });
      });


      // Initial location
      $scope.latitude = 42.3584865;
      $scope.longitude = -71.060097;
      $scope.city = "Boston, MA, USA"

      // Update longitude and latitude when someone
      // selects a location and recenter the map.
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
        control: {},
        events: {
          tilesloaded: function (map) {
            $scope.$apply(function () {
              debugger;
              $scope.gMap = map;
              $scope.placesService = new google.maps.places.PlacesService(map);
            });
          }
        }
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

      $scope.map.window = {
         templateUrl: 'partials/point-info.html',
        templateParameter: {
          city: $scope.city,
          lat: $scope.latitude,
          lon: $scope.longitude
        }
      }



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
