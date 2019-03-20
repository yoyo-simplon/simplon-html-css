var regles = {

    "ciseaux" : {

        "ciseaux" : 0,
        "pierre" : 0,
        "feuille" : 1,

    },

    "pierre" : {

        "ciseaux" : 1,
        "pierre" : 0,
        "feuille" : 0,

    },

    "feuille" : {

        "ciseaux" : 0,
        "pierre" : 1,
        "feuille" : 0,

    }

};

var totalU = 0;

var totalO = 0;

var manche = 3;

var nul = 0;

var shifumi = [];

var main = document.getElementsByClassName("main");

for(var i = 0; i < main.length; i++){

     shifumi.push(main[i].dataset.player);

}

var info = document.getElementById('info');
var res  = document.getElementById('resultat');

function play(e) {

    let joueur = e.dataset.player;

    manche--;

    if(manche >= 0) {

        compare(joueur);
        
    } 
}

function compare(joueur) {

    var choixO = shifumi[Math.floor(Math.random()*shifumi.length)];
  
    totalU += regles[joueur][choixO];

    totalO += regles[choixO][joueur];

    ega = regles[joueur][choixO] + regles[choixO][joueur];

    if(ega == 0) {

        nul++;

    }

    if(regles[joueur][choixO] < regles[choixO][joueur] && ega > 0) {
 
        info.innerHTML = "Bots control the world he choose &nbsp;" + choixO + " and you choose &nbsp;" + joueur;
    
    } else if(regles[joueur][choixO] > regles[choixO][joueur] && ega > 0) {

        info.innerHTML = "vous avez choisi &nbsp;" + joueur + " vous avez gagné le bot à choisi &nbsp;" + choixO;
        
    } 
    
    else {

        info.innerHTML =  "Human choose &nbsp;" + joueur + " and bot &nbsp;" + choixO + " we live in harmony"

    }

    res.innerHTML = "Bot " + totalO + " / Humain " + totalU + " / nul " + nul;


    if(manche == 0) {

        if(totalU > totalO) {

        info.innerHTML = info.innerHTML + " <br> la partie est terminé vous avez gagné";
        
        } else if (totalU < totalO) {

            info.innerHTML = info.innerHTML + "<br> la partie est terminé le bot à gagné";

        } else {

            info.innerHTML = info.innerHTML + "<br> la partie est terminé humans and bots live in harmony";
        }
    }
}