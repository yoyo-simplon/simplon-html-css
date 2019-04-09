document.getElementById("image1").onmouseover = function() {mouseOver()};
document.getElementById("image1").onmouseout = function() {mouseOut()};

function mouseOver() {
  //document.getElementById("image1").style.backgroundColor = "red";
    //document.getElementById("image1").setAttribute('class', 'highlight');
    document.getElementsByClassName("img")[0].src = "images/image1_2.jpg";
}

function mouseOut() {
    document.getElementsByClassName("img")[0].src = "images/image1.jpg";
}