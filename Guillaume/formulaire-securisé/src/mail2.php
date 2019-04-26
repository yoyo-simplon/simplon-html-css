<?php
$error = "";

function securite_bdd($base, $string)
{
	// On regarde si le type de string est un nombre entier (int)
	if(ctype_digit($string))
	{
		$string = intval($string);
	}
	// Pour tous les autres types
	else
	{
		$string = mysqli_real_escape_string($base, $string);
		$string = addcslashes($string, '%_');
	}
	
	// echo $string;
	// echo "<br>";

	return $string;
}


	// on se connecte à notre base
	$base = mysqli_connect('mysql', 'web', 'pass', 'web');

	
	// on echappe les caractere, utilisé en injection sql
	$name = securite_bdd($base, $_POST['name']);
	$prenom = securite_bdd($base, $_POST['prenom']);
	$tel = securite_bdd($base, $_POST['tel']);
	$email = securite_bdd($base, $_POST['email']);
	$subject = securite_bdd($base, $_POST['subject']);
	$message = securite_bdd($base, $_POST['message']);


	// si le nom est superieur a 10 caractères
	if(strlen($name) > 10){
		echo "Le nom doit etre inférieur a 10 caractères !";
		$error = true;
	}

	if(strlen($prenom) > 10){
		echo "Le prénom doit etre inférieur a 10 caractères !";
		$error = true;
	}

	// on vérifie que le numéros de tel est sous la forme : 123 45 67 89
	$str = preg_match('/^\d?\d{3}[\s-]?\d{2}[\s-]?\d{2}[\s-]?\d{2}$/', $tel);

	if(!$str){
		echo "le numero de tel doit etre sous cette forme : 123 45 67 89";
		$error = true;
	}

	if ($error == true){
		echo "Erreur, veuillez recommencer"
	} else{
	$sql = "INSERT INTO mail VALUES (NULL, '$name', '$prenom', '$tel', '$email', '$subject', '$message')";

	// on insere le tuple (mysql_query) et au cas où, on écrira un petit message d'erreur si la requête ne se passe pas bien (or die)
	mysqli_query ($base, $sql) or die ('Erreur SQL !'.$sql.'<br />'.mysqli_error());
	
	// on ferme la connexion à la base
	mysqli_close($base);
	echo "Fomulaire envoyer"
	$error = "";
	}
?>
