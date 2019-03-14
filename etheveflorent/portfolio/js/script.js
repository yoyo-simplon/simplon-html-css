$(document).ready(function(){
$("#exemples img").click(function() {
    $(".modal").addClass("is-active");  
    $("#fullscreen").attr("src",$(this).attr("src"));

  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
  });
});