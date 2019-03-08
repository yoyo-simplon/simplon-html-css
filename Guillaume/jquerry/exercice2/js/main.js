$('#bouton1').click(function(){
    // si la hauteur est inférieur à 100px, on agrandit le rectangle de 10px
    if( $('#rectangle').height() > 100 ) {
        $('#rectangle').css('height', '10px');
    } else {
      $('#rectangle').css('height', $('#rectangle').height()+10+"px");
    }
})

$('#bouton2').click(function(){
    $('#rectangle').css('backgroundColor', 'green');
  });

  $('#bouton3').click(function(){
    $('#rectangle').css('backgroundColor', "red");
  });

  $('#bouton4').click(function(){
    $('#rectangle').css('display', 'none');
  });

  $('#bouton5').click(function(){
    $('#rectangle').css('display', 'block');
  });