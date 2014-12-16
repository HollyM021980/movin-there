angular.module('MovnThereUI')
    .config( [
        '$routeProvider',
        function($routeProvider) {
            'use strict';

            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                })
                .when('/users', {
                    templateUrl: 'views/users.html',
                    controller: 'UserCtrl'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/signup', {
                    templateUrl: 'views/signup.html',
                    controller: 'SignupCtrl'
                })
                .when('/logout', {
                    controller: 'LogoutCtrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                })
                .when('/contact', {
                    templateUrl: 'views/contact.html',
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]
);
