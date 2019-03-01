var choix = prompt("Choisir: pierre, feuille, ciseau");
var tab = ["pierre", "feuille", "ciseau"];
var ordi = tab[Math.floor(Math.random()*tab.length-1)];

if (choix === ordi) {
    alert("match null");
} else if ( (choix === "pierre" && ordi === "ciseau") || (choix === "feuille" && ordi === "pierre") 
|| (choix === "ciseau" && ordi === "feuille") ) {
    alert("vous avez gagne");
} else {
    alert("l'ordi a gagne");
}
