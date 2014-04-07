/*global angular */
var PigE = angular.module('pige', []);

PigE.config(function ($routeProvider, $locationProvider) {
        "use strict";
        $locationProvider
            .html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/register', {
                templateUrl: '/js/template/registration.html',
                controller: 'registrationController'
            })
            .when('/register/setup', {
                templateUrl: '/js/template/registration-setup.html',
                controller: 'registrationController'
            });
});