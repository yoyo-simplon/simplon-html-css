let resutat = 0;
let chiffre1 = 0;
let chiffre2 = 0;
let operateur = "";


function calcul(chiffre1,chiffre2){
    
if(operateur === "+"){
    resutat = chiffre1 + chiffre2;
} else if(operateur==="-"){
    resutat = chiffre1 - chiffre2;
} else if(operateur==="/"){
    resutat = chiffre1 / chiffre2;
} else if(operateur==="*"){
    resutat = chiffre1 * chiffre2;
}else{
    resutat ="Erreur..."
}
return resutat}

chiffre1 = prompt("entrer le chiffre 1");
operateur = prompt("Entrer l'opérateur (+ , - , / , *) ")
chiffre2 = prompt("entrer le chiffre 2");
alert("Le résultat est " + resutat)