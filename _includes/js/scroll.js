$(window).scroll(function() {
  if ($(this).scrollTop()> 300) {
    $('.social-share').fadeIn();
   } else {
    $('.social-share').fadeOut();
   }
});
