
const le_score = document.getElementById("scores");
var score_vous = 0;
var score_ordi = 0;


function my_function(event) {
  const shi_fu_mi = ["Pierre", "Papier", "Ciseau"];
  const icone = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"];
  const choix_ia = document.getElementById("ordi");
  const icone_vous = document.getElementById("joueur");


  let aleatoire = (Math.round(Math.random() * 2));
  let ordinateur_choix = shi_fu_mi[aleatoire];
  let icone_ordi_choix = icone[aleatoire];
  let mon_choix = event.innerHTML;

  if (mon_choix == "Pierre"){
    icone_vous.setAttribute("class", "far fa-hand-rock");
  } else if (mon_choix == "Papier"){
    icone_vous.setAttribute("class", "far fa-hand-paper");
  } else {
    icone_vous.setAttribute("class", "far fa-hand-scissors");
  }

  choix_ia.setAttribute("class", icone_ordi_choix);

  console.log(ordinateur_choix)
  
  if (mon_choix == ordinateur_choix) {
    document.getElementById("resultat").innerHTML = "Match Null"
 
  } else if ((mon_choix == "Pierre" && ordinateur_choix == "Ciseau") || (mon_choix == "Papier" && ordinateur_choix == "Pierre") || (mon_choix == "Ciseau" && ordinateur_choix == "Papier")) {

    document.getElementById("resultat").innerHTML = "Tu as gagné"
    score_vous += 1;
    

  } else {
    document.getElementById("resultat").innerHTML = "Tu as perdu"
    score_ordi += 1;
  }
  const resultat_score = le_score.innerHTML = (score_vous + "-" + score_ordi);
}