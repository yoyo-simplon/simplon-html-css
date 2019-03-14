//quand le joueur clique sur l'un des boutons un message s'affiche en dessous
function myFunctionPierre() {
    document.getElementById("joueur").innerHTML = "Vous avez choisi Pierre";
  };

  function myFunctionFeuille() {
    document.getElementById("joueur").innerHTML = "Vous avez choisi Feuille";
  };

  function myFunctionCiseaux() {
    document.getElementById("joueur").innerHTML = "Vous avez choisi Ciseaux";
  };

//choix de l'ordinateur aléatoire
const choix = ['Pierre','Feuille','Ciseaux'];

const ordi = choix[Math.floor(Math.random()*3)];
console.log("ordi a choisi " + ordi);



//condition pour Egalité-Perdu-Gagné
    if ((onclick === "Pierre" && ordi === "Pierre") || (onclick === "Feuille" && ordi === "Feuille") || (onclick === "Ciseaux" && ordi === "Ciseaux")){
        console.log("égalité");
        ordi.println ("Lordi a choisi la pierre");
    }
        else if((onclick === "Pierre" && ordi === "Feuille") || (onclick === "Feuille" && ordi === "Ciseaux") || (onclick === "Ciseaux" && ordi === "Pierre")){
            console.log("Perdu")
        }
        else{
            console.log("Gagné")
        };