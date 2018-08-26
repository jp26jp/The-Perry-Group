$(function() {
  if (location.pathname !== "/") {
    $('nav a[href^="' + location.pathname + '"]').addClass("active")
  } else {
    $("nav a[href='/']").addClass("active")
  }
})
