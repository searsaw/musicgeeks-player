angular.module('MusicgeeksApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'MusicgeeksController',
        templateUrl: 'views/main.html'
      });

    $locationProvider.html5Mode(true);
  })
  .filter('trustAsResourceUrl', function($sce) {
    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };
  })
  .factory('Song', function($resource) {
    return $resource('http://musicgeeksapi.alexsears.com/v1/songs', { apikey: 'F7284ACC3C51E' });
  })
  .controller('MusicgeeksController', function($scope, Song) {
    $scope.songs = Song.query(function() {
      $scope.current_song = $scope.songs[0];
    });

    $scope.play = function(song) {
      $scope.current_song = song;
    };
  });