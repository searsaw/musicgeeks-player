(function($){

  $('#artist-dropdown-btn').on('click', function() {
    var that = $(this),
        artistsContainer = $('#artists-container'),
        docHeight = window.innerHeight,
        top = that.offset().top,
        eleHeight = that.height(),
        i = $('#artist-dropdown-btn i');

    if (artistsContainer.is(':visible')) {
      artistsContainer.slideUp();
      i.detach().appendTo(that);
      i.removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
    } else {
      artistsContainer.height(docHeight - top - eleHeight);
      artistsContainer.slideDown();
      i.detach().prependTo(that);
      i.removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
    }

  });

})(jQuery);