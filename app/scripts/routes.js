angular.module('MovnThereUI').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/users', {
            templateUrl: 'templates/users.html',
            controller: 'UserCtrl'
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
        .otherwise({
            redirectTo: '/'
        });
});
