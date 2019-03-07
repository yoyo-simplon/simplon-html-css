var tailleInitiale = $('.text').css('fontSize');
$('.text').click(function(){
    if( $(this).css('fontSize') != '42px' ){
      $(this).css('fontSize', '42px');
    } else {
      $(this).css('fontSize', tailleInitiale);
    }});