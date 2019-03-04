var score_ordi = 0;
var score_joueur = 0;
var nbmanche = 3;

function monchoix(c){choix=c; shifumi()};

function shifumi() {
    if(nbmanche==0){
         score_ordi = 0;
        score_joueur = 0;
         nbmanche = 3;
    }

    //while (nbmanche > 0) {

     //  var choix = prompt("Choisir: pierre, feuille, ciseau");
        var tab = ["pierre", "feuille", "ciseau"];
        var ordi = tab[Math.floor(Math.random() * tab.length - 1)];


        if (choix === ordi) {
            alert("match null");
            nbmanche--;
        } else if ((choix === "pierre" && ordi === "ciseau") || (choix === "feuille" && ordi === "pierre") ||
            (choix === "ciseau" && ordi === "feuille")) {
            alert("vous avez gagne");
            nbmanche--;
            score_joueur++;
        } else {
            alert("l'ordi a gagne");
            nbmanche--;
            score_ordi++;
        }
        document.getElementById("joueur").innerHTML ="Votre score :"+ score_joueur;
        document.getElementById("ordi").innerHTML = "Score de l'ordi :"+score_ordi;
   // }
    if(score_joueur>score_ordi) document.getElementById("score").innerHTML="Vous êtes vainqueur";
    else if (score_ordi>score_joueur) document.getElementById("score").innerHTML="l'ordi est vainqueur";
    else document.getElementById("score").innerHTML="personne ne gagne";
}