<html>

<head>
    <title>Formulaire de contact</title>
    <script src="main.js"></script>
</head>


<body>

    <h1>Contact</h1>
    <form method="post" action="form_contact.php">

        <div class="form-group">
            <label>Votre Nom</label>
            <input type="text" name="Nom" class="form_control" maxlength="10" id="Nom">
        </div>

        <div class="form-group">
            <label>Votre Prenom</label>
            <input type="text" name="Prenom" class="form_control" id="Prenom" onKeyUp="maxL(this, 10);" >

        </div>


        <div class="form-group">
            <label>Votre Nunéro de téléphone</label>
            <input type="text" name="Phone" class="form_control" placeholder="0692 12 23 12"
                pattern="[0-9]{4} [0-9]{2} [0-9]{2} [0-9]{2}">
            <span class="validity"></span>
        </div>

        <div class="form-group">
            <label>Votre message</label> <br>


            <input type="text" name="message" id="message" required>
            <span id='missMessage'></span>
        </div>

        <input type='submit' value='Valider' id='bouton_envoi'>
    </form>
</body>




<script>
    var formValid = document.getElementById('bouton_envoi');
    var message = document.getElementById('message');
    var missMessage = document.getElementById('missMessage');


    formValid.addEventListener('click', validation);


    function validation(event) {

        if (message.validity.valueMissing) {
            event.preventDefault();
            missMessage.textContent = 'message manquant';
            missMessage.style.color = 'red'
        }
    }

    function maxL(element, max){
	value = element.value;
	max = parseInt(max);
	if(value.length > max){
		element.value = value.substr(0, max);
	}
}


</script>



</html>