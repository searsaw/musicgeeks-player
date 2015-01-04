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
    var artistDropdownBtn = $('#artist-dropdown-btn'),
        artistsContainer = $('#artists-container'),
        docHeight = window.innerHeight,
        iArrow = $('#artist-dropdown-btn i'),
        soundcloudSong = $('#soundcloud-song'),
        footer = $('footer');

    artistDropdownBtn.on('click', function() {
      if (artistsContainer.is(':visible')) {
        artistsContainer.slideUp();
        iArrow.detach().appendTo(artistDropdownBtn);
        iArrow.removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
      } else {
        artistsContainer.slideDown();
        iArrow.detach().prependTo(artistDropdownBtn);
        iArrow.removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
      }
    });

    $scope.songs = Song.query(function() {
      $scope.current_song = $scope.songs[0];

      // set artist container height
      if (artistDropdownBtn.is(':visible')) {
        artistsContainer.height(docHeight - artistDropdownBtn.offset().top - artistDropdownBtn.height());
      } else {
        artistsContainer.height(docHeight - soundcloudSong.height() - footer.height());
      }
    });

    $scope.play = function(song) {
      $scope.current_song = song;
    };
  });