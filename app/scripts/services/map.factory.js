angular.module('MovnThereUI')
    .factory('MapFactory', [
    '$http',
    'GglKey',
    function($http, GglKey) {
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


    // function loadScript() {
    //   var script = document.createElement('script');
    //   script.type = 'text/javascript';
    //   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    //       'callback=initialize';
    //   document.body.appendChild(script);
    // }

    // window.onload = loadScript;

}]);
