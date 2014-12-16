// initialize the app
angular.module('MovnThereUI',[
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
        }
    ]
);
