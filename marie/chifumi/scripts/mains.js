

for (var manche = 0; manche < 3; manche++) {
// choix joueur
var joueur = prompt("cailloux,papier,ciseaux:");
var joueur =("cailloux,papier,ciseaux");
var ordi = ["cailloux","papier","ciseaux"];
var choixAI = ordi[Math.floor(Math.random()*ordi.length)];

// déroulement
if(joueur===choixAI){
    alert("égalité");
}

else if ((joueur="papier")&&(choixAI="cailloux")) {
    alert("gagné");
    
}

else if ((joueur="papier")&&(choixAI="ciseaux")){
    alert("perdu")
}

else if ((joueur="cailloux")&&(choixAI="papier")){
    alert("perdu")
}
else if ((joueur="cailloux")&&(choixAI="ciseaux")){
    alert("gagné")
}
else if ((joueur="ciseaux")&&(choixAI="cailloux")){
    alert("perdu")
}
else if ((joueur="ciseaux")&&(choixAI="papier")){
    alert("gagné")
}


var score = (joueur,choixAI);
var scoreAI = 0;
var scoreJoueur = 0;

  // afficher les résultats de la manche

  if (resultat === 'Egalité !'){
    console.log('=> Egalité !');
  } else if (resultat === choixjoueur) {
  	scoreJoueur++;

    alert('=> Coup gagnant '+ resultat  +' Score = moi :'+ scoreJoueur + 'et ordi:' + scoreAI);

  } else {
  	scoreOrdi++;
}


// afficher résultats du jeu
var score=joueur
var score= AI

var message;
for (var tour = 3);{
    
}


if (ScoreAi===scorejoueur)
{
    alert = 'égalité !' ;
    }
else if (scoreAI > scorejoueur) {
  alert = ' Vous avez perdu !';
} else {
  alert =  ' Vous avez gagné !';
}



alert(message + ' Votre score est de : ' + scoreJoueur + ', Contre : ' + scoreAI);
 }



