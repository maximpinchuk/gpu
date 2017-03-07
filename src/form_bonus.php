<?php

$recepient = "maximpinchuk1995@gmail.com";
$sitename = "GPU";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["msg"]);
$body = "
	<b>Имя</b>: $name\n
	<b>Телефон</b>: $phone\n
	<b>E-mail</b>: $email\n
	<b>Сообщение</b>: $msg
";

$pagetitle = "Требование бонуса \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>