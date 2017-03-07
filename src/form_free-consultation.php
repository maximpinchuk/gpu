<?php

$recepient = "maximpinchuk1995@gmail.com";
$sitename = "GPU";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["msg"]);
$body = "
	Имя: $name\n
	Телефон: $phone\n
	E-mail: $email\n
	Сообщение: $msg
";

$pagetitle = "Бесплатная консультация \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>