function newElement() {
    var t = document.getElementById("pseudo").value;
    localStorage.setItem("pseudo", document.getElementById("pseudo").value);

    var d = new Date();
    var jour = d.getDate();
    var mois = d.getMonth();
    var année = d.getFullYear();
    var heure = d.getHours();
    var min = d.getMinutes();

   var chat = document.getElementById("para").innerHTML += "Message publié le " +jour+ "/" +mois+ "/" +année+ ", à " +heure+ ":" +min+ " : <br>" + t + "<br><br>";
    
}