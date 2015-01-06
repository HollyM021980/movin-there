angular.module('MovnThereUI')
  .controller('HomeCtrl', [
    '$scope',
    'uiGmapGoogleMapApi',
    'uiGmapIsReady',
    'TypeAheadFactory',
    'ZipRadiusFactory',
    function($scope, GoogleMapApi, IsReady, TypeAheadFactory, ZipRadiusFactory) {
      'use strict';


      GoogleMapApi.then(function(maps) {
        maps.visualRefresh = true;

      });

      IsReady.promise().then(function (maps) {
        // maps.forEach(function(inst){
        //   var map = inst.map;
        //   var mapInstanceNumber = inst.instance; // Starts at 1.
          // $scope.placesService = new google.maps.places.PlacesService(map);
          // $scope.radiusResults = $scope.radiusSearch($scope.latitude, $scope.longitude, $scope.placesService, $scope.radiusSearchCallback);
        // });
        $scope.radiusCities = $scope.zipSearchRadius($scope.zip, $scope.searchMiles);
      });


      // Initial location
      $scope.latitude = 42.3584865;
      $scope.longitude = -71.060097;
      $scope.city = "Boston, MA, USA";
      $scope.zip = "02201";
      $scope.searchMiles = 5;
      $scope.radiusCities = {};

      // Update longitude and latitude when someone
      // selects a location and recenter the map.
      $scope.onSelect = function ($item, $model) {
        // debugger;
        $scope.latitude = $item.location.lat;
        $scope.longitude = $item.location.lng;
        $scope.city = $item.formatted_address;
        $scope.zip = $scope.getZip($scope.city);
        $scope.cities = $scope.zipSearchRadius($scope.zip, $scope.searchMiles);
        // $scope.radiusResults = $scope.radiusSearch($scope.latitude, $scope.longitude, $scope.placesService, $scope.radiusSearchCallback)
        $scope.map.marker.city = $scope.city;
        $scope.map.marker.coords.latitude = $scope.latitude;
        $scope.map.marker.coords.longitude = $scope.longitude;

        $scope.map.control.refresh({latitude: $scope.latitude, longitude: $scope.longitude, city: $scope.city});
        // Get geo info about the place
      };

      $scope.radiusSearch = function(latitude, longitude, placesService, radiusSearchCallback) {
       var latLng, placeRequest;

        latLng = new google.maps.LatLng(latitude,longitude);

        placeRequest = {
          location: latLng,
          radius: 50000,
          types: '(cities)'
        };

        placesService.radarSearch(placeRequest, radiusSearchCallback);
      };

      $scope.radiusSearchCallback = function(results, status) {
        // debugger;
        if (status != google.maps.places.PlacesServiceStatus.OK) {
          alert(status);
          return;
        };
        for (var i = 0, result; result = results[i]; i++) {
          console.log(result[i].geometry.location);
          // var marker = new google.maps.Marker({
          //   map: $scope.map,
          //   position: result.geometry.location
          // });
        };
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

      $scope.zipSearchRadius = function(zip, mileRadius) {
        debugger;
        ZipRadiusFactory.fetchCities(zip, mileRadius).then(
          function(zipCities) {
            $scope.zipCities = zipCities;
          }
        );
      };


      // Address to have "zip, country" as the last two
      // things on the address string.
      $scope.getZip = function(address) {
        var lastComma, zip;
        lastComma = address.lastIndexOf(",");
        zip = address.substr((lastComma - 5), 5);
        return zip;
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
              $scope.gMap = map;
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
