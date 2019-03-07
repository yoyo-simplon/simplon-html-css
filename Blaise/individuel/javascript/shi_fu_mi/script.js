const shi_fu_mi = ["Pierre", "Papier", "Ciseau"];
const aleatoire = (Math.round(Math.random() * 2));
const ordinateur_choix = shi_fu_mi[aleatoire];
console.log(ordinateur_choix)

function my_function(event) {
  let mon_choix = event.innerHTML;
  console.log(mon_choix);
  if (mon_choix == ordinateur_choix) {
    document.getElementById("resultat").innerHTML = "Match Null"
  } else if ((mon_choix == "Pierre" && ordinateur_choix == "Ciseau") || (mon_choix == "Papier" && ordinateur_choix == "Pierre") || (mon_choix == "Ciseau" && ordinateur_choix == "Papier")) {

    document.getElementById("resultat").innerHTML = "Tu as gagné"
  } else {

    document.getElementById("resultat").innerHTML = "Tu as perdu"
  }
}