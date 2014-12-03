angular.module('MovnThereUI').config(function($routeProvider) {
    'use strict';
debugger;
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
        .when('/about', {
            templateUrl: 'templates/about.html',
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});
