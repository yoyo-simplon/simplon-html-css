var choix = ["pierre", "feuille", "ciseaux"];
var ordi = _.sample(choix);


var main = prompt("chi fu mi", "Pierre Feuille Ciseau");
if (main == "pierre") {
    if (ordi == "pierre") {
        window.alert("matcht nul");
    }
}