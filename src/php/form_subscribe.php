<?php

$recepient = "maximpinchuk1995@gmail.com";
$sitename = "GPU";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$email = trim($_POST["email"]);
$body = "
	E-mail: $email
";

$pagetitle = "Подписка на рассылку \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>