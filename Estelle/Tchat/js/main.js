document.getElementById("test").style.display = "none"; 
if(typeof sessionStorage!='undefined') {
    if('phr' in sessionStorage) {
        document.getElementById('bienvenue').value = sessionStorage.getItem('phr');
        document.getElementById("bienvenue").style.display = "none";
    }
}else{
    document.getElementById("bienvenue").style.display = "hidden";
}

function newPseudo() {
    var pseudo = document.getElementById("pseudo").value;
    var phrase = "Bienvenue à toi " + pseudo + " tu peux commencer à tchatter ;)";
    document.getElementById("bienvenue").innerHTML = phrase;
    document.getElementById("bienvenue").style.display = "block"; 
    document.getElementById("block-pseudo").style.display = "none"; 
    document.getElementById("test").style.display = "block"; 
    sessionStorage.setItem("phr", phrase);

}

function newElement() {
    var t = document.getElementById("message").value;

    var d = new Date();
    var jour = d.getDate();
    var mois = d.getMonth();
    var année = d.getFullYear();
    var heure = d.getHours();
    var min = d.getMinutes();

    var chat = document.getElementById("para").innerHTML += "Message publié le " +jour+ "/" +mois+ "/" +année+ ", à " +heure+ ":" +min+ " : <br>" + t + "<br><br>";
   
    sessionStorage.setItem("text", chat);
    

    if(typeof sessionStorage!='undefined') {
        if('text' in sessionStorage) {
          document.getElementById('para').value = sessionStorage.getItem('text');
        }
      } else {
        alert("sessionStorage n'est pas supporté");
      }
      console.log(sessionStorage);
}

function afficher() {
    var a = sessionStorage.getItem('text');
    document.getElementById("para").innerHTML = a;
    document.getElementById("test").style.display = "block"; 

}

