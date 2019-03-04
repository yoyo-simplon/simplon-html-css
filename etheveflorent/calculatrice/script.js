var calcul="";

//mise a zero
function reset(){
calcul="";
document.getElementById("text").value="";
}


function ajout_chiffre(c){
    if(c==",") c=".";

if(calcul.substr(calcul.length-1) =="+" || calcul.substr(calcul.length-1) =="/" 
|| calcul.substr(calcul.length-1) =="*"  || calcul.substr(calcul.length-1) =="-")
{
var tmp=calcul.substringg(calcul.length-1);
    tmp+=tc;
    console.log(calcul);
    document.getElementById("text").value=calcul;

}else{
    calcul+=c;
    document.getElementById("text").value=calcul;
}



}
//inverse le signe du dernier chiffre
function inverse(){
var op=calcul.substring(calcul.length-1)*-1;
calcul=calcul.replace(calcul.substring(calcul.length-1),op);
document.getElementById("text").value=calcul;
}
function calculer(){
    var total=eval(calcul);
    document.getElementById("text").value=total;
}