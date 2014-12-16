angular.module('MovnThereUI')
    .factory('TypeAheadFactory', [
    '$http',
    'GglKey',
    function($http, GglKey) {
      'use strict';
      var locations = [];

      return {
        getLocation : function(val) {
            return $http.get('https://maps.googleapis.com/maps/api/geocode/json', {
                headers: {
                  'Accept':  'application/json, text/plain, * / *',
                  'Authorization': undefined
                },
                params: {
                  address: val,
                  key: GglKey,
                  types: '(cities)',
                  components: 'country:US',
                  sensor: false
                }
            });
        }
      };
}]);


