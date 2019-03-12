var holdScore1 = 0;
var totalscore1 = 0;
var holdScore2 = 0;
var totalscore2 = 0;
var currentplayer = "player1";
var iconeplayer = document.querySelectorAll(".fa-circle");//icone a coté du joueur qui joue

changeplayer();

function newGame(){
     holdScore1 = 0;
 totalscore1 = 0;
 holdScore2 = 0;
 totalscore2 = 0;
 currentplayer = "player1";
 document.getElementById("score1").innerHTML = totalscore1;
 document.getElementById("score2").innerHTML = totalscore2;
 document.getElementById("current1").innerHTML = "Current 0";
 document.getElementById("current2").innerHTML = "Current 0";
 changeplayer();
}

function rolldice() {
    var imgnbr = Math.floor(Math.random() * 5 + 1);

    document.getElementById("dice").setAttribute("src", "images/dice-" + imgnbr + ".png");

    if (imgnbr != 1) {
        if (currentplayer == "player1") {
            holdScore1 += imgnbr;
            document.getElementById("current1").innerHTML = "Current <br>" + holdScore1;
        } else {
            holdScore2 += imgnbr;
            document.getElementById("current2").innerHTML = "Current <br>" + holdScore2;
        }
    } else {
        if (currentplayer == "player1") {
            holdScore1 = 0;
            currentplayer = "player2";
            document.getElementById("current1").innerHTML = "Current 0";
            changeplayer();
        } else {
            holdScore2 = 0;
            currentplayer = "player1";
            document.getElementById("current2").innerHTML = "Current 0";
            changeplayer();
        }
    }

}

function hold() {
    if (currentplayer == "player1") {
        totalscore1 += holdScore1;
        currentplayer = "player2";
        document.getElementById("score1").innerHTML = totalscore1;
        changeplayer();
    } else {
        totalscore2 += holdScore2;
        currentplayer = "player1";
        document.getElementById("score2").innerHTML = totalscore2;
        changeplayer();
    }


}
//fonction qui change lorsque un joueur fait 1, appuye sur hold ou au tout début de partie
function changeplayer() {
    if (currentplayer == "player1") {
        document.getElementsByTagName("section")[0].style.backgroundColor = "#F7F7F7";
        document.getElementsByTagName("section")[1].style.backgroundColor = "white";
        iconeplayer[0].style.visibility="visible";
        iconeplayer[1].style.visibility="hidden";
    } else {
        document.getElementsByTagName("section")[0].style.backgroundColor = "white";
        document.getElementsByTagName("section")[1].style.backgroundColor = "#F7F7F7";
        iconeplayer[0].style.visibility="hidden";
        iconeplayer[1].style.visibility="visible";
    }
}
if(totalscore1==100) alert("Le joueur 1 a gagné");
else alert("Le joueur 2 a gagné");