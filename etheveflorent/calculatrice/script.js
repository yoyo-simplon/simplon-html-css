var calcul="";

//mise a zero
function reset(){
calcul="";
document.getElementById("text").value="";
}


function ajout_chiffre(c){
    if(c=="," && calcul.charAt(calcul.length-1)!=".") c=".";

if( calcul.charAt(calcul.length-1) ==["+"||"*"||"\/"||"-" ]  && c==["+"||"*"||"\/"||"-" ]  )
{
var tmp=calcul.split();
console.log("tmp : "+tmp);
    tmp[tmp.length-1]=c;

    console.log("tmp2 : "+tmp);
    calcul=tmp.join();
    document.getElementById("text").value=calcul;

}else{
    console.log("calcul1 : "+calcul);
    calcul+=c;
    document.getElementById("text").value=calcul;
}
console.log("calcul2 : "+calcul);


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