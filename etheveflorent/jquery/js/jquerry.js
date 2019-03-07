$(document).ready(function(){

$("#text").click(function(){
    $(this).toggleClass("text");

})
   var $width=0;
$("#b1").click(function(){
 
if($width!=100){
    $width+=10;

}else{
        $width=0;
}
$("#rect").css("height",$width+"px");
});

$("#b2").click(function() {
    $("#rect").css("background-color","green");
})

$("#b3").click(function() {
    $("#rect").css("background-color","white");
})

$("#b4").click(function() {
    $("#rect").hide();
})

$("#b5").click(function() {
    $("#rect").show();
})


});