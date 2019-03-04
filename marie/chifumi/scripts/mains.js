




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