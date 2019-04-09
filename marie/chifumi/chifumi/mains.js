// score
var score_AI = 0;
var score_joueur = 0;
var nbtour=3;
var choix=c;

 
     function schifumi(){

         if (tour==0){
             score_joueur=0;
             score_AI=0;
             tour=3;
         }

        if(tour>0) {
            varchoix=prompt("Pierre,Feuille,Ciseaux");
             varjoueur=["Pierre;Feuille;Ciseaux"];
             varAI=joueur[Math.floor(choixAI()*schifumi.lengt-1)];
        }
     

// déroulement
if(joueur===choixAI){
    alert("égalité");
    tour--;
}

else if ((joueur="papier")&&(choixAI="cailloux")); {
    alert("gagné");
    tour++;
}
document.getElementById("joueur").innerHTML ="score joueur :"+ score_joueur;
document.getElementById("AI").innerHTML = "score ordinateur :"+  scoreAI;

if ((joueur="papier")&&(choixAI="ciseaux")){
    alert("perdu");
}

else if ((joueur="cailloux")&&(choixAI="papier")){
    alert("perdu");
}
else if ((joueur="cailloux")&&(choixAI="ciseaux")){
    alert("gagné");
}
else if ((joueur="ciseaux")&&(choixAI="cailloux")){
    alert("perdu");
}
else if ((joueur="ciseaux")&&(choixAI="papier")){
    alert("gagné")
} 
}
