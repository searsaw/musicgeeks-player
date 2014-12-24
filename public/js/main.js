(function($){
  var artistDropdownBtn = $('#artist-dropdown-btn'),
    artistsContainer = $('#artists-container'),
    docHeight = window.innerHeight,
    iArrow = $('#artist-dropdown-btn i'),
    soundcloudSong = $('#soundcloud-song'),
    footer = $('footer');

  function setArtistContainerHeight() {
    if (artistDropdownBtn.is(':visible')) {
      artistsContainer.height(docHeight - artistDropdownBtn.offset().top - artistDropdownBtn.height());
    } else {
      artistsContainer.height(docHeight - soundcloudSong.height() - footer.height());
    }
  }

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

  setArtistContainerHeight();

})(jQuery);