
var choix = ["pierre", "feuille", "ciseaux"]
var aleatoire = (Math.round(Math.random() * 2));



ordinateur_choix = choix[aleatoire];
var pointsUtilisateur = 0;
var pointsOrdi = 0;


for (var compteur = 1; compteur <= 3; compteur++) {
    

    var choixUtilisateur= prompt("Manche" + compteur + "choisissez Pierre, feuille ou ciseaux!")

    if (choixUtilisateur== ordinateur_choix) {
        alert("Match null personne n'a gagné de points");
        alert( "score Utilisateur" +  pointsUtilisateur + "score Ordinateur" + pointsOrdi );

    
    
    } else if ((choixUtilisateur == "pierre" && ordinateur_choix == "ciseaux") || (choixUtilisateur == "feuille" && ordinateur_choix == "pierre") || (choixUtilisateur == "ciseaux" && ordinateur_choix == "feuille" )) {
        alert("L'ordinateur à choisi " + ordinateur_choix + " ...You Win! ");
        pointsUtilisateur = pointsUtilisateur + 1;

        alert( "score Utilisateur" +  pointsUtilisateur + "score Ordinateur" + pointsOrdi );

    
    
    
    } else {
    
        alert("L'ordinateur à choisi " + ordinateur_choix + " ... You loose try again ! ");
        pointsOrdi = pointsOrdi + 1; 

        alert( "score Utilisateur" +  pointsUtilisateur + "score Ordinateur" + pointsOrdi );

    }

    console.log("Mon choix : " + choixUtilisateur);
    console.log("Choix de l'ordi : " + ordinateur_choix);

  }



