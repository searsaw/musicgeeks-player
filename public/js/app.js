angular.module('MusicgeeksApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'MusicgeeksController',
        templateUrl: 'views/main.html'
      });

    $locationProvider.html5Mode(true);
  });