let param = ["Pierre", "Feuille", "Ciseaux"];


let randomIA = param[Math.round(Math.random() * 3)];

let pointUser = 0;
let pointIA = 0;

for (let nb = 1; score <= 5; score++) {
  let choixUtilisateur = prompt("Manche" + nb + "Pierre? Feuille? Ciseaux?");
  
  if ((choixUtilisateur = "Pierre") && (randomIA = "Ciseaux") || (choixUtilisateur = "Ciseaux") && (randomIA = "Feuille") || (choixUtilisateur = "Feuille") && (randomIA = "Pierre")) {
    alert("Ordi" + randomIA + " Vous" + choixUtilisateur + " Vous avez gagné!");
    alert("score Utilisateur" + pointsUser + "score Ordinateur" + pointsIA);
    pointUser = pointUser + 1; 
  } 
  else if (choixUtilisateur === randomIA) {
    alert(randomIA + choixUtilisateur + "Egalité");
  } 
  else {
    alert(randomIA + choixUtilisateur + "Vous avez perdu!");
    pointsIA = pointsIA + 1;
    alert("score Utilisateur" + pointsUtilisateur + "score Ordinateur" + pointsOrdi);
  }
}