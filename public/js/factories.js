angular.module('MusicgeeksApp')
  .factory('Song', function($resource) {
    return $resource('http://musicgeeksapi.alexsears.com/v1/songs', { apikey: '96F32F59E64B1' });
  });