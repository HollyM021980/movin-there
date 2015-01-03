angular.module('MovnThereUI')
  .config([
    'uiGmapGoogleMapApiProvider',
    'GglKey',
    function (GoogleMapApi) {
      GoogleMapApi.configure({
        key: GglKey,
        v: '3.17',
        libraries: 'places'
      });
}])
