<?php

// function securite_bdd($base, $string)
// {
// 	// On regarde si le type de string est un nombre entier (int)
// 	if(ctype_digit($string))
// 	{
// 		$string = intval($string);
// 	}
// 	// Pour tous les autres types
// 	else
// 	{
// 		$string = mysqli_real_escape_string($base, $string);
// 		$string = addcslashes($string, '%_');
// 	}
	
// 	echo $string;
// 	echo "<br>";
// 	return $string;

// }



class Securite
{
	// Données entrantes
	public static function bdd($base, $string)
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
		
		echo "bdd";
		echo $string;
		echo "<br>";
		return $string;

	}
	// Données sortantes
	public static function html($string)
	{
		
		
		echo "html";
		echo $string;
		echo "<br>";
		return htmlentities($string);
	}
}

	// on se connecte à notre base
	$base = mysqli_connect('mysql', 'web', 'pass', 'web');


	


	// requete préparée
	$sql = $base->prepare("INSERT INTO mail VALUES (:email, :subject, :message)");
	$sql->bindParam(':email', $email);
	$sql->bindParam(':subject', $subject);
	$sql->bindParam(':message', $message);

	// Insertion d'une ligne
	
	$name = Securite::html($_POST['name']);
	$prenom = Securite::html($_POST['prenom']);
	$tel = Securite::html($_POST['tel']);
	$email = Securite::html($_POST['email']);
	$subject = Securite::html($_POST['subject']);
	$message = Securite::html($_POST['message']);


	$name = Securite::bdd($base, $name);
	$prenom = Securite::bdd($base, $prenom);
	$tel = Securite::bdd($base, $tel);
	$email = Securite::bdd($base, $email);
	$subject = Securite::bdd($base, $subject);
	$message = Securite::bdd($base, $message);



	$sql->execute();


	


	// $sql = "INSERT INTO mail VALUES (NULL, '$email', '$subject', '$message')";








	// on insere le tuple (mysql_query) et au cas où, on écrira un petit message d'erreur si la requête ne se passe pas bien (or die)
	mysqli_query ($base, $sql) or die ('Erreur SQL !'.$sql.'<br />'.mysqli_error());
	
	// on ferme la connexion à la base
	mysqli_close($base);

?>
