<?php

$recepient = "info@gpu.by";
$sitename = "GPU";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$email = trim($_POST["email"]);
$body = "
	<html>
		<body> 
			<h3>Данные лида</h3>
			</br>
			<p><b>Email:</b> $email</p>
		</body> 
	</html>
";

$pagetitle = "Подписка на рассылку \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>