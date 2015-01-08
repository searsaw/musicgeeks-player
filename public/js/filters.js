angular.module('MusicgeeksApp')
  .filter('trustAsHtml', function($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  });