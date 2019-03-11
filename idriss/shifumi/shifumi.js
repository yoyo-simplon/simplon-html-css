var main = ["pierre", "papier", "ciseaux"];

var joueur = prompt("tente ta chance");

var ordi = main[Math.floor(Math.random() * 3)];

alert("tu es sûr de vouloir jouer " + joueur + " ?");

var vs = function (joueur, ordi) {
    if (joueur === ordi) {
        alert("Egalité!");
    } else if ((joueur === "pierre") && (ordi === "papier")) {
        alert("papier win!");
    } else if ((joueur === "pierre") && (ordi === "ciseaux")) {
        alert("pierre win!");
    } else if ((joueur === "ciseaux") && (ordi === "papier")) {
        alert("ciseaux win!");
    } else if ((joueur === "ciseaux") && (ordi === "papier")) {
        alert("pierre win!");
    } else if ((joueur === "papier") && (ordi === "pierre")) {
        alert("papier win!");
    } else {
        alert("ciseaux win !");
    }
}
vs();