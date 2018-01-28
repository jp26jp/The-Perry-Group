"use strict";
function r(b) {
  /in/.test(document.readyState)
    ? setTimeout("r(" + b + ")", 9)
    : b()
}
r(function() {
  if (!document.getElementsByClassName) {
    var g = function(a, p) {
      var o = [];
      var b = new RegExp("(^| )" + p + "( |$)");
      var c = a.getElementsByTagName("*");
      for (var d = 0, e = c.length; d < e; d++) {
        if (b.test(c[d].className)) {
          o.push(c[d])
        }
      }
      return o
    };
    var j = g(document.body, "youtube")
  } else {
    var j = document.getElementsByClassName("youtube")
  }
  var i = j.length;
  for (var f = 0; f < i; f++) {
    j[f].style.backgroundImage = "url(https://i.ytimg.com/vi/" + j[f].id + "/sddefault.jpg)";
    var h = document.createElement("div");
    h.setAttribute("class", "play");
    j[f].appendChild(h);
    j[f].onclick = function() {
      var a = document.createElement("iframe");
      var b = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      if (this.getAttribute("data-params")) {
        b += "&" + this.getAttribute("data-params")
      }
      a.setAttribute("src", b);
      a.setAttribute("frameborder", "0");
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this)
    }
  }
});