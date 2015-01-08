angular.module('MusicgeeksApp')
  .factory('Song', function($resource) {
    return $resource('http://musicgeeksapi.alexsears.com/v1/songs', { apikey: 'F7284ACC3C51E' });
  })
  .factory('SoundcloudWidget', function() {
    var widget;
    var events = {
      ready: SC.Widget.Events.READY,
      error: SC.Widget.Events.ERROR,
      finish: SC.Widget.Events.FINISH
    };

    return {
      createNew: function(iframe) {
        widget = SC.Widget(iframe);
      },
      bind: function(event, callback) {
        widget.bind(event, callback);
      },
      load: function(url) {
        widget.load(url, {
          color: '777',
          hide_related: false,
          show_reposts: false,
          callback: function() {
            widget.play();
          }
        });
      }
    }
  });