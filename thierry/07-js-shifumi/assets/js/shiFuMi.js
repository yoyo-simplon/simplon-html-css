/*** shifumi 
 * à chaque manche, l’ordinateur et le joueur choisissent chacun un élément parmi pierre, feuille ou ciseaux.
 * Un point est donné à celui qui a choisi l’élément le plus fort, 
 * sachant que:
 *    ciseaux > feuille (les ciseaux coupent la feuille)
 *    pierre > ciseaux (la pierre casse les ciseaux)
 *    feuille > pierre (la feuille enveloppe la pierre)
 * 
 * Phase 1 : Une manche
 *
 * 01 Dessiner l’arbre de décision d’une manche: nom de l’élément gagnant en fonction de deux éléments choisis;
 *
 * 02 Transformer l’arbre de décision en conditions if imbriquées, en fonction de la valeur de deux variables: choix1 et choix2;
 * 03 Chaque condition de dernier niveau va afficher dans la console le nom de l’élément qui remporte la manche;
 * 04 Transférer ces conditions dans la définition d’une fonction comparer(choix1, choix2) qui retourne le nom de l’élément gagnant à l’aide de return (au lieu de l’afficher dans la console), parmi les deux passés en paramètres; Si les deux sont identiques, retourner égalité.
 *
 * 05 Tester cette fonction en lui passant chaque combinaison possible de valeurs du jeu en paramètres;
 * 06 En dehors de la définition de la fonction, créer les variables choixOrdi et choixUtilisateur;
 *
 * 07 Faire en sorte que choixOrdi ait pour valeur un des trois éléments, choisi de manière aléatoire, et que choixUtilisateur soit saisi par l’utilisateur à l’aide de prompt();
 * 08 Appeler la fonction comparer(), puis afficher dans la console la valeur de son résultat (l’élément qui remporte la manche), à partir des choix de l’ordinateur et du joueur.
 *
 * Phase 2: Partie en 3 manches, et scores
 *
* 09 Après avoir implémenté une manche à l’aide de la fonction comparer(), faites en sorte que le joueur puisse jouer 3 manches d’affilée et que le score final du joueur et de l’ordinateur soient affichés dans la console en fin de partie.
* 
* 10 Créer les variables scoreOrdi et scoreJoueur;
* 11 Après l’affichage du résultat de l’appel à comparer() dans la console, incrémenter une de ces variables, en fonction de qui a remporté la manche;
* 
* 12 Mettre le code correspondant à une manche dans une boucle for, de manière à ce qu’il s’exécute 3 fois d’affilée;
* 13 En fin de partie, afficher qui a remporté la partie: 'ordi', 'joueur' ou 'aucun', en fonction des scores.
* ***/

var pareil = "Egalité!"
var bon = "gagné"
var mauvais = "perdu"
var scoreOrdi = 0
var scoreJoueur = 0
var pari = ["pierre", "feuille", "ciseaux"]
var result = document.getElementById("SHIFU_displayResult")
result.innerHTML = ''

/*** choixOrdi */
function calculOrdi() {
	return auHasard = Math.round(Math.random() * 3)
}
/*** choixJoueur */
function comparer(choixJoueur) {
	pariJoueur =  Number(choixJoueur)
	pariOrdi = calculOrdi()
		
	if (pariOrdi == pariJoueur) {
			result.innerHTML += pareil + "<br />";
		} else if ((pariJoueur == 0 && pariOrdi == 2) || (pariJoueur == 1 && pariOrdi == 0) || (pariJoueur == 2 && pariOrdi == 1)) {
			result.innerHTML += bon + "<br />";
		} else {
			result.innerHTML += mauvais + "<br />";
		}			
	result.innerHTML += "Score (Joueur - Ordi) : " + scoreJoueur + " - " + scoreOrdi + "<br />";

}
/*
	for(var i = 0; i < 3; i++) {
		if (i == 0) {
			alert(comparer(choixOrdi, choixJoueur))
			} else {
			final = prompt('3 manches de jouer')
			}
		}
	}
*/

