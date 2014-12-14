angular.module('MovnThereUI')
    .config( [
        '$routeProvider',
        function($routeProvider) {
            'use strict';

            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                })
                .when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/signup', {
                    templateUrl: 'templates/signup.html',
                    controller: 'SignupCtrl'
                })
                .when('/logout', {
                    controller: 'LogoutCtrl'
                })
                .when('/about', {
                    templateUrl: 'templates/about.html',
                })
                .when('/contact', {
                    templateUrl: 'templates/contact.html',
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]
);