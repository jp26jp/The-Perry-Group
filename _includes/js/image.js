(function(){
  let image_popup = $("#image_popup");

  $("#main-content p img").click(function() {
    var src = $(this).prop('src');
    $("#image_popup img").attr('src', src);
    $(image_popup).show();
  });

  $("#close").click(function(){
    $(image_popup).hide();
  });

})();
