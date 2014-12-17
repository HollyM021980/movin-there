// initialize the app
angular.module('MovnThereUI',[
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ]).run([
        '$rootScope',
        '$location',
        '$http',
        '$window',
        'AuthFactory',
        'UserFactory',
        'TypeAheadFactory',
        function(
            $rootScope,
            $location,
            $http,
            $window,
            AuthFactory,
            UserFactory,
            TypeAheadFactory
        ) {
            'use strict';
            $rootScope.$on('$routeChangeStart', function(event, next) {

                if (AuthFactory.isAuthenticated()) {
                    if (AuthFactory.isAuthenticated()) {
                        $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('movnThereUI.user');
                    }

                    UserFactory.fetch();
                } else {
                    if (($location.path() !== '/login') && ($location.path() !== '/signup')) {
                        $location.path('/login');
                    }
                }
            });



            // function initialize() {
            //     debugger;
            //   var mapOptions = {
            //     zoom: 8,
            //     center: new google.maps.LatLng(-34.397, 150.644)
            //   };

            //   var map = new google.maps.Map(document.getElementById('map-canvas'),
            //       mapOptions);
            // }

            // function loadScript() {
            //   var script = document.createElement('script');
            //   script.type = 'text/javascript';
            //   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
            //       'callback=initialize';
            //   document.body.appendChild(script);
            // }

            // window.onload = loadScript;



        }
    ]
);
