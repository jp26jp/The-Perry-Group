!function(t){"use strict";t(function(){t.fn.animateCounter=function(r){var e=t(this);if(t(this).find(".bit-counter-item").length>0){var o=[];void 0!==r.borderBackground&&o.push({borderBackground:r.borderBackground}),void 0!==r.borderForeground&&o.push({borderForeground:r.borderForeground}),void 0!==r.circleBackground&&o.push({circleBackground:r.circleBackground}),void 0!==r.counterColor&&o.push({counterColor:r.counterColor});for(var i=o.length-1;i>=0;i--){var n=Object.keys(o[i])[0],s=Object.values(o[i])[0];document.documentElement.style.setProperty("--"+n,s)}t(this).find(".bit-counter-item").each(function(){t(this).addClass("bit-"+r.animationType);var o=t(this);if("progressMeter"==r.animationType){var i=583.5-583.5*t(this).find(".value").html()/100;t(this).find(".value").html('<svg id="svg" width="200" height="200" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle r="93" cx="100" cy="100" fill="transparent" stroke-dasharray="583.5" stroke-dashoffset="0" class="base"></circle> <circle style=" stroke-dashoffset: 583.5; " class="bar tobe" r="93" cx="100" cy="100" fill="transparent" stroke-dasharray="583.5" ></circle> </svg>')}t(document).on("scroll",function(){var r=t(e).offset().top+t(o).height(),n=t(window).height();t(window).scrollTop()>r-n&&(t(o).find(".bar.tobe").css("stroke-dashoffset",i),t(o).find(".count").each(function(){t(this).prop("Counter",0).animate({Counter:t(this).text()},{duration:1e3,easing:"swing",step:function(r){t(this).text(Math.ceil(r))}})}),t(o).find(".count").removeClass("count").addClass("counted"))}).trigger("scroll")}),t(window).on("resize",function(){t(window).width()<992?(t("svg").width(160).height(160),t("circle").attr({r:"73",cx:"80",cy:"80"})):(t("svg").width(200).height(200),t("circle").attr({r:"93",cx:"100",cy:"100"}))}).trigger("resize")}}})}(jQuery);