
document.getElementById("image1").onmouseover = function() {mouseOver()};
document.getElementById("image2").onmouseover = function() {mouseOver()};
document.getElementById("image3").onmouseover = function() {mouseOver()};
document.getElementById("image4").onmouseover = function() {mouseOver()};
document.getElementById("image5").onmouseover = function() {mouseOver()};


function mouseOver() {
    document.getElementById("image1").src = "images/image1_2.jpg";
    document.getElementById("image2").src = "images/image2_2.jpg";
    document.getElementById("image3").src = "images/image3_2.jpg";
    document.getElementById("image4").src = "images/image4_2.jpg";
    document.getElementById("image5").src = "images/image5_2.jpg";

}