angular.module('MovnThereUI')
    .factory('TypeAheadFactory', [
    '$http',
    function($http) {
      'use strict';
      var locations = [];

      return {
        getLocation : function(val) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                headers: {
                  'Accept':  'application/json, text/plain, * / *',
                  'Authorization': undefined
                },
                params: {
                  address: val,
                  sensor: false
                }
            });
        }
      };
}]);


