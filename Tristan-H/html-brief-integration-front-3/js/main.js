var images = [];
images[0] = "../img/cardboard-recycling-bale-1325417.jpg";
images[1] = "../img/pile-of-trash-1568889.jpg";
images[2] = "../img/recycling-2-1456880.jpg";
images[3] = "../img/recycling-makes-cents-1539973.jpg";
var loop;
var i = 0;
$(document).ready(function () {
    $("#bt1").click(function () {
        $("#art1").slideDown("slow");
        $("#art2").slideUp("slow");
        $("#art3").slideUp("slow");
        $("#art4").slideUp("slow");
        $("#art5").slideUp("slow");
        $("#art6").slideUp("slow");
        $("#art7").slideUp("slow");
        $("#art8").slideUp("slow");
        $("#art9").slideUp("slow");
    });
    $("#btn1").mouseover(function(){
        $("#btn1").css("background-color", "#17721c" );
        $("#btn1").css("background-color", "#17721c");
    });
    $("#bt2").click(function () {
        $("#art1").slideUp("slow");
        $("#art2").slideDown("slow");
        $("#art3").slideUp("slow");
        $("#art4").slideUp("slow");
        $("#art5").slideUp("slow");
        $("#art6").slideUp("slow");
        $("#art7").slideUp("slow");
        $("#art8").slideUp("slow");
        $("#art9").slideUp("slow");
    });
    $("#bt3").click(function () {
        $("#art1").slideUp("slow");
        $("#art2").slideUp("slow");
        $("#art3").slideDown("slow");
        $("#art4").slideUp("slow");
        $("#art5").slideUp("slow");
        $("#art6").slideUp("slow");
        $("#art7").slideUp("slow");
        $("#art8").slideUp("slow");
        $("#art9").slideUp("slow");
    });
    $("#bt4").click(function () {
        $("#art1").slideUp("slow");
        $("#art2").slideUp("slow");
        $("#art3").slideUp("slow");
        $("#art4").slideDown("slow");
        $("#art5").slideUp("slow");
        $("#art6").slideUp("slow");
        $("#art7").slideUp("slow");
        $("#art8").slideUp("slow");
        $("#art9").slideUp("slow");
    });
    

    $(document).ready(function () {
        setTimeout(fadeDivs, 3000);
    });

    function fadeDivs() {
        i = i < images.length ? i : 0;
        $('#carousel img').fadeOut(100, function () {
            $(this).attr('src', images[i]).fadeIn(100);
        });
        i++;
    }

});