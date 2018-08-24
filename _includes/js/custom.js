$(function () {
    if (location.pathname !== "/") {
        $("nav a[href^=\"/" + location.pathname.split("/")[1] + "\"]").addClass("active")
    } else {
        $("nav a[href='/']").addClass("active")
    }

})
