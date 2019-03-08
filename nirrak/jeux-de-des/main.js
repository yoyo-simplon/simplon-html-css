var scoreGlobalA = 0;
var scoreGlobalB = 0;
var scoreLocalA = 0;
var scoreLocalB = 0;
document.getElementById("mainplayer1").src = "images/pointRouge.png";
document.getElementById("mainplayer2").src = "images/pointNoir.png";
var joueurEnCours = "A";

// mise a l'écoute des commandes
document.getElementById("gameNew").addEventListener("click", initialiseGame);
document.getElementById("gameRoll").addEventListener("click", lanceDice);
document.getElementById("gameHold").addEventListener("click", globaliseScore);

// Lancement d'un nouveau jeu
function initialiseGame() {
    scoreGlobalA = 0; document.getElementById("scoreGlobalGamer1").innerHTML = 0;
    scoreGlobalB = 0; document.getElementById("scoreGlobalGamer2").innerHTML = 0;
    scoreLocalA = 0; document.getElementById("scoreLocalGamer1").innerHTML = 0;
    scoreLocalB = 0; document.getElementById("scoreLocalGamer2").innerHTML = 0;
    document.getElementById("mainplayer1").src = "images/pointRouge.png";
    document.getElementById("mainplayer2").src = "images/pointNoir.png";
    joueurEnCours = "A";
}

//  Lancement de dés
function lanceDice() {
    var D = 1 + Math.floor(Math.random() * 6);
    document.getElementById("dice").style.border= "thin ridge gray"; 
    switch (D){
        case 1 : document.getElementById("dice").src="images/dice-1.png"; 
                 chgtjoueur(); break;
        case 2 : document.getElementById("dice").src="images/dice-2.png";
                 cumulPoint(D); break;
        case 3 : document.getElementById("dice").src="images/dice-3.png";
                 cumulPoint(D); break;
        case 4 : document.getElementById("dice").src="images/dice-4.png";
                 cumulPoint(D); break;
        case 5 : document.getElementById("dice").src="images/dice-5.png";
                 cumulPoint(D); break;
        case 6 : document.getElementById("dice").src="images/dice-6.png";
                 cumulPoint(D); break;
        default: alert("Oouups-1  !!!");
    }
}

// changement de joueur après suite dés=1
function chgtjoueur() {
    switch(joueurEnCours) {
        case "A" :  document.getElementById("scoreLocalGamer1").innerHTML = 0;
                    document.getElementById("mainplayer1").src = "images/pointNoir.png";
                    document.getElementById("mainplayer2").src = "images/pointRouge.png";
                    scoreLocalA = 0; joueurEnCours="B"; break;
        case "B" :  document.getElementById("scoreLocalGamer2").innerHTML = 0;
                    document.getElementById("mainplayer1").src = "images/pointRouge.png";
                    document.getElementById("mainplayer2").src = "images/pointNoir.png";
                    scoreLocalB = 0; joueurEnCours="A"; break;   
        default: alert("Oouups-2  !!!"); 
    }
}
document.getElementById("image1").src="images/image1_2.jpg";
//  Traitement des données après le lancement de dés outre que 1
function cumulPoint(D) {    
    switch(joueurEnCours) {
        case "A" :  scoreLocalA = D + scoreLocalA;
                    document.getElementById("scoreLocalGamer1").innerHTML = scoreLocalA ;
                    break;
        case "B" :  scoreLocalB = D + scoreLocalB;
                    document.getElementById("scoreLocalGamer2").innerHTML = scoreLocalB;
                    break;
        default: alert("Oouups-3  !!!");
    }
}

// Transfert du score local vers le score global
function globaliseScore() {
    var SLA = parseInt(document.getElementById("scoreLocalGamer1").innerHTML);
    var SLB = parseInt(document.getElementById("scoreLocalGamer2").innerHTML);
    var SGA = parseInt(document.getElementById("scoreGlobalGamer1").innerHTML);
    var SGB = parseInt(document.getElementById("scoreGlobalGamer2").innerHTML);
    switch(joueurEnCours) {
        case "A" :  SGA = SGA + SLA;
                    document.getElementById("scoreGlobalGamer1").innerHTML = SGA ;
                    chgtjoueur()
                    if (SGA >= 100) {alert (" PLAYER 1 \n \n ~ VOUS AVEZ GAGNE ~ ");}              
                    break;
        case "B" :  SGB = SGB + SLB;
                    document.getElementById("scoreGlobalGamer2").innerHTML = SGB;
                    chgtjoueur()
                    if (SGB >= 100) {alert (" PLAYER 2 \n \n  ~ VOUS AVEZ GAGNE ~ ");}    
                    break;
        default: alert("Oouups-4  !!!");
    }
} 

