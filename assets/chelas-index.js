(function ($) {
  var THRESHOLD = 100;

  function updateHeaderScrollState() {
    if ($(window).scrollTop() >= THRESHOLD) {
      $('body').addClass('chelas-header-scrolled');
    } else {
      $('body').removeClass('chelas-header-scrolled');
    }
  }

  $(function () {
    $(window).on('scroll.chelasHeader', updateHeaderScrollState);
    updateHeaderScrollState();
  });
})(jQuery);
