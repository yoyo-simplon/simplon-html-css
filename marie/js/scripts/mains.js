

// choix joueur
var joueur = prompt("cailloux, papier, ciseaux");
var ordi = ["cailloux","papier","ciseaux"];
var choixAI = ordi[Math.floor(Math.random()*ordi.length)];


// compteur et boutons

var choix = ("cailloux, papier, ciseaux") ;  // resultats

var tour = 3;    // nb de coups
var scorejoueur=3
var saisie;

var msg = fini;


do

{

     saisie = prompt(fini);

     tour++;

     // message a afficher au prochain tour :

     if(saisie > nb)

          msg = "C'est gagné";

     else

          msg = "C'est perdu";

}

while(saisie != nb);


alert("Bravo, tu as gagne en " + cpt + " coups !");
// déroulement

if(joueur===choixAI){
    alert("égalité");
}

else if ((joueur=="papier")&&(choixAI=="cailloux")) {
    alert("gagné");
    
}

else if ((joueur=="papier")&&(choixAI=="ciseaux")){
    alert("perdu")
}

else if ((joueur=="cailloux")&&(choixAI=="papier")){
    alert("perdu")
}
else if ((joueur=="cailloux")&&(choixAI=="ciseaux")){
    alert("gagné")
}
else if ((joueur=="ciseaux")&&(choixAI=="cailloux")){
    alert("perdu")
}
else{
    alert("gagné")
}

