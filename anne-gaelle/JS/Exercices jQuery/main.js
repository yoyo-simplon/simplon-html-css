$(document).ready(() => {
    var taillePoliceInitiale = $('#ex1').css('fontSize');
    $('#ex1').click(function () {
        console.log(taillePoliceInitiale);
        if ($(this).css('fontSize') != '50px') {
            $(this).css('fontSize', '50px');
        } else {
            $(this).css('fontSize', taillePoliceInitiale);
        }
    });

    $('#btn2').on('click', () => {
        $('#rectangle').css('background-color', 'green');
    });
    $('#btn3').on('click', () => {
        $('#rectangle').css('background-color', 'blueviolet');
    });
    $('#btn4').on('click', () => {
        $('#rectangle').hide();
    });
    $('#btn5').on('click', () => {
        $('#rectangle').show();
    });
    $('#btn1').on('click', () => {
        if ($('#rectangle').height() < 150) {
            $('#rectangle').css("height", $('#rectangle').height() + 10 + "px");
        } else {
            $('#rectangle').css('height', "80px");
        }
    });
});