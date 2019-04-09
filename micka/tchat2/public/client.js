var socket = io();

$('form').submit(function(e) {
    e.preventDefault();
    var message = {
        text : $('#m').val()
    }

    socket.emit('chat-message', message);
    $('#m').val('');
    return false;
    if (message.text.trim().length !== 0) {
        socket.emit('chat-message', message);
    }
    $('#chat input').focus();
});

socket.on('chat-message', function (message) {
    $('#messages').append($('<li>').html('<span class="username">' + message.username + '</span> ' + message.text));
  });

  $('#login form').submit(function (e) {
    e.preventDefault();
    var user = {
      username : $('#login input').val().trim()
    };
    if (user.username.length > 0) { // Si le champ de connexion n'est pas vide
      socket.emit('user-login', user);
      $('body').removeAttr('id'); // Cache formulaire de connexion
      $('#chat input').focus(); // Focus sur le champ du message
    }
  });

  

  socket.on('service-message', function (message) {
    $('#messages').append($('<li class="' + message.type + '">').html('<span class="info">information</span> ' + message.text));
  });