angular.module('MovnThereUI')
  .factory('FavoritesFactory', [
    '$http',
    '$q',
    'ServerUrl',
    function($http, $q, ServerUrl) {

      var favorites = {};
      var fetch = function() {
        $http.get(ServerUrl/favorites/usr)
            .success(function(response) {
                angular.copy(response, favorites);
              });
      };

      return {
        fetch: fetch,
        favorites: favorites

      };

}]);
