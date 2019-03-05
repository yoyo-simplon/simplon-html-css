let resultat = 0;
let chiffre1 = "";
let chiffre2 = "";
let operateur = "";
let separateur = "";

// function resetChiffre(){

// }
function reset(i) {
    resultat = 0;
    chiffre1 = "";
    chiffre2 = "";
    operateur = "";
    separateur = "";
    alert("Remise a zero ...")
}

function ope(i) {
    operateur = i
}

function chiffre(i) {
    if (operateur === "")
    chiffre1 += i;
    else{
    chiffre2 += i;
    }
    
};

function egal(i){

    if (operateur === "+" ){
        resultat = Number(chiffre1) + Number(chiffre2);
        alert(resultat)
    } else if (operateur === "-") {
        resultat = Number(chiffre1) - Number(chiffre2);
        alert(resultat)
        
    } else if (operateur === "/") {
        resultat = Number(chiffre1) / Number(chiffre2);
        alert(resultat)
        
    } else if (operateur === "*") {
        resultat = Number(chiffre1) * Number(chiffre2);
        alert(resultat)
        
    } else {alert("Erreur...")}
    
    
}

