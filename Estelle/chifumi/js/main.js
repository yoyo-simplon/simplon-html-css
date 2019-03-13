const buttons = document.querySelectorAll("button")
for (i=0; i<buttons.length; i++){
	buttons[i].addEvenListner("click", function(){
		const joueur = buttons[i].innerHTML;
		const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML
		
	let resultat = "";	
	if (joueur === robot){
		resultat="Egalité";
	}
		else if ((joueur === 'Pierre' && robot === 'Ciseaux') || (joueur === 'Ciseaux' && robot === 'Feuille') || (joueur === 'Feuille' && robot === 'Pierre')) {
			resultat="Gagné";
		}
		else{
		resultat="Perdu"}
  }
  
  )};