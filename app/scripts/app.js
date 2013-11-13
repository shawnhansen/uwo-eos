'use strict';

angular.module('eosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about-uw-oshkosh', {
        templateUrl: 'views/about-uw-oshkosh.html'
      })
      .when('/administration', {
        templateUrl: 'views/administration.html'
      })
      .when('/current-students', {
        templateUrl: 'views/current-students.html'
      })
      .when('/faculty-and-staff', {
        templateUrl: 'views/faculty-and-staff.html'
      })
      .when('/parents-family-friends', {
        templateUrl: 'views/parents-family-friends.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
