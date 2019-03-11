// OBJECTIF ----------------------------------
//Faire un dé entre 1 et 6
//Quand le joueur appuie sur Rool-Dice, lance les dé et cumule les points et le stock dans score current
//Quand le joueur appuie sur HOLD, stock les points du current dans le score global




// Variables -----
const lancement_de = document.querySelector("#rool_dice");
const current_player1 = document.querySelector("#current_player1");
var current = 0


// COOODEEEEE --------------
lancement_de.addEventListener("click", function() {
    const aleatoire = Math.ceil(Math.random()*6);
    current_player1.innerHTML = current += aleatoire;
    console.log("Mon de = " + aleatoire);
    console.log("Mon current = " + current)
});

