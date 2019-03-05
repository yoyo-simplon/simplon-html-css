/*** shifumi 
 * à chaque manche, l’ordinateur et le joueur choisissent chacun un élément parmi pierre, feuille ou ciseaux.
 * Un point est donné à celui qui a choisi l’élément le plus fort, 
 * sachant que:
 *    ciseaux > feuille (les ciseaux coupent la feuille)
 *    pierre > ciseaux (la pierre casse les ciseaux)
 *    feuille > pierre (la feuille enveloppe la pierre)
 * 
 * Exemple de déroulement d’une manche
 *    l’ordinateur choisit secrètement pierre (parmi les trois valeurs d’éléments possibles);
 *    le joueur est invité à saisir son choix => il tape feuille;
 *    l’ordinateur affiche feuille car c’est l’élément qui l’emporte (la feuille enveloppe la pierre).
 *  ***/

var choixJoueur = prompt('Quel est votre choix: pierre, feuille, ciseaux?')
alert('Vous avez choisi: ' + choixJoueur + ' ! :-)')

var auHasard = Math.round(Math.random() * 3)
var choixOrdi
	if (auHasard === 1) {
		choixOrdi = 'pierre'
		} else if (auHasard === 2) {
			choixOrdi = 'feuille' 
		} else {
			choixOrdi = 'ciseaux'
	}
alert('Ordi a choisi: ' + choixOrdi + ' ! :-)')

var choix1 = choixOrdi
var choix2 = choixJoueur
var resultat = 'Egalité!'

var scoreOrdi
var scoreJoueur

function comparer(choixOrdi, choixJoueur) {
    
	if (choixOrdi == choixJoueur) {
	  return "Egalité!"
		} else if (choixOrdi == 'pierre' && choixJoueur == 'ciseaux') {
	  		return "Pierre casse les ciseaux!"
	  	} else if (choixOrdi == 'pierre' && choixJoueur == 'feuille') {
	  		return "La feuille enveloppe la pierre!"
	  	} else if (choixOrdi == 'feuille' && choixJoueur == 'ciseaux') {
	  		return "Les ciseaux coupent la feuille!"
	} else {
	  return resultat
	}
}
alert(comparer(choixOrdi, choixJoueur))