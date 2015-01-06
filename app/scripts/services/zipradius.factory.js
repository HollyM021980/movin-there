angular.module('MovnThereUI')
  .factory('ZipRadiusFactory', [
    '$http',
    '$q',
    'ZipKey',
    function($http, $q, ZipKey) {
      'use strict';

      var ZipRadiusFactory = {};
      var zipHeaders = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      };
        ZipRadiusFactory.fetchCities = function(zipCode, mileRadius) {

          var zipcodeSearchURL =
              ["https://www.zipcodeapi.com/rest/",
                ZipKey,
                "/radius.json/",
                zipCode,
                "/",
                mileRadius,
                "/mile/"
              ].join("");
// debugger;
          return $http.jsonp(zipcodeSearchURL, zipHeaders)
            .then(
              function (response) {
                debugger;
                return {
                   // title: response.data.title,
                   // cost:  response.data.price
                }
              },
              function (httpError) {
                debugger;
                // translate the error
                throw httpError.status + " : " +
                       httpError.data;
              });
        };


      // return {
      //   fetchCities : function(zipCode, mileRadius) {

      //     var zipcodeSearchURL =
      //       ["https://www.zipcodeapi.com/rest/",
      //         ZipKey,
      //         "/radius.json/",
      //         zipCode,
      //         "/",
      //         mileRadius,
      //         "/mile"
      //       ].join("");

      //     return $http.get(zipcodeSearchURL, {
      //       headers: {
      //         'Accept':  'application/json, text/plain, * / *',
      //         'Authorization': undefined
      //       }
      //     });
      //   }

      // };
    return ZipRadiusFactory;
}]);
