angular.module('MovnThereUI')
    .factory('AuthFactory', [
        '$http',
        '$window',
        'ServerUrl',
        function($http, $window, ServerUrl) {
            'use strict';

            var login = function(credentials) {

                return $http
                    .post(ServerUrl + 'login', credentials)
                    .success(function(response) {
                        $window.sessionStorage.setItem('movnThereUI.user', response.token);

                        $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('movnThereUI.user');
                    });
            };

            var signup = function(credentials) {
                var params = {
                    user: credentials
                };

                return $http
                .post(ServerUrl + 'signup', params)
                .success(function(response) {
                    $window.sessionStorage.setItem('movnThereUI.user', response.token);

                    $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('movnThereUI.user');
                });
            };


            var logout = function(credentials) {
                return $http
                    .post(ServerUrl + '/logout')
                    .success(function(response) {
                        $window.sessionStorage.removeItem('movnThereUI.user');
                    });
            };

            var isAuthenticated = function() {
                return !!$window.sessionStorage.getItem('movnThereUI.user');
            };

            return {
                login: login,
                signup: signup,
                logout: logout,
                isAuthenticated: isAuthenticated
            };
        }
    ]
);
