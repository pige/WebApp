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
            })
            .when('/register/organization', {
                templateUrl: '/js/template/registration-orgs.html',
                controller: 'registrationController'
            })
            .when('/register/account', {
                templateUrl: '/js/template/registration-account.html',
                controller: 'registrationController'
            });
});