
document.getElementById("image1").onmouseover = function() {mouseOver()};
document.getElementById("image2").onmouseover = function() {mouseOver()};
document.getElementById("image3").onmouseover = function() {mouseOver()};
document.getElementById("image4").onmouseover = function() {mouseOver()};
document.getElementById("image5").onmouseover = function() {mouseOver()};


document.getElementById("image1").onmouseout = function() {mouseOut()};
document.getElementById("image2").onmouseout = function() {mouseOut()};
document.getElementById("image3").onmouseout = function() {mouseOut()};
document.getElementById("image4").onmouseout = function() {mouseOut()};
document.getElementById("image5").onmouseout = function() {mouseOut()};


function mouseOver() {
    document.getElementById("image1").src = "images/image1_2.jpg";
    document.getElementById("image2").src = "images/image2_2.jpg";
    document.getElementById("image3").src = "images/image3_2.jpg";
    document.getElementById("image4").src = "images/image4_2.jpg";
    document.getElementById("image5").src = "images/image5_2.jpg";

}

function mouseOut() {
    document.getElementById("image1").src = "images/image1.jpg";
    document.getElementById("image2").src = "images/image2.jpg";
    document.getElementById("image3").src = "images/image3.jpg";
    document.getElementById("image4").src = "images/image4.jpg";
    document.getElementById("image5").src = "images/image5.jpg";
}