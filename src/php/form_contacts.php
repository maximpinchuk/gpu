<?php

$recepient = "maximpinchuk1995@gmail.com";
$sitename = "GPU";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";
$pagetitle = "Обратная связь \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["msg"]);
$body = "
	<h4>Тема:</h4> $pagetitle
	<br>
	<b>Имя:</b> $name
	<br>
	<b>Телефон:</b> $phone
	<br>
	<b>E-mail:</b> $email
	<br>
	<b>Сообщение:</b> $msg
";

mail($recepient, $pagetitle, $body, $headers);
?>