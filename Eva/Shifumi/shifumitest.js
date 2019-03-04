var choixUtilisateur= prompt("choisissez Pierre, feuille ou ciseaux!")
var choix = ["pierre", "feuille", "ciseaux"]
var aleatoire = (Math.floor(Math.random() * 3));



ordinateur_choix = choix[aleatoire];





if (choixUtilisateur== ordinateur_choix) {
    alert("Match null");


} else if ((choixUtilisateur == "pierre" && ordinateur_choix == "ciseau") || (choixUtilisateur == "feuille" && ordinateur_choix =="pierre") || (choixUtilisateur== "ciseau" && ordinateur_choix =="feuille" )) {
    alert("L'oridinateur à choisi " + ordinateur_choix + " ...You Win ! ");



} else {

    alert("L'oridinateur à choisi " + ordinateur_choix + " ... You loose try again ! ");
}

console.log("Mon choix : " + choixUtilisateur);
console.log("Choix de l'ordi : " + ordinateur_choix);
