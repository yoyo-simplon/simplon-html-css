var main = ["pierre", "papier", "ciseaux"];

var joueur = prompt("tente ta chance");

var ordi = main[Math.floor(Math.random() * 3)];

alert("tu es sûr de vouloir jouer " + joueur + " ?");

function vs(joueur, ordi) {

    if (joueur === ordi) {

        alert("Egalité!");

    } else if ((joueur === "papier") && (ordi === "pierre")) {

        alert("player wins !");

    } else if ((joueur === "pierre") && (ordi === "ciseaux")) {

        alert("player wins !");

    } else if ((joueur === "ciseaux") && (ordi === "papier")) {

        alert("player wins !");

    }
    else if ((joueur === "pierre") && (ordi === "papier")) {

        alert("player loses !");

    } else if ((joueur === "ciseaux") && (ordi === "pierre")) {

        alert("player loses !");

    } else if ((joueur === "papier") && (ordi === "ciseaux")) {

        alert("player loses !");

    }
    else { alert("tu es sûr d'avoir compris le jeux ?")}
};

vs(joueur, ordi)