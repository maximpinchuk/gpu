<?php

$recepient = "maximpinchuk1995@gmail.com";
$sitename = "GPU";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["msg"]);
$body = "
	<h2 style="font-family: 'Arial', sans-serif; font-size: 24px;">Данные клиента</h2>
	</br>
	<b>Имя:</b> $name
	</br>
	<b>Телефон:</b> $phone
	</br>
	<b>E-mail:</b> $email
	</br>
	<b>Сообщение:</b> $msg
";

$pagetitle = "Бесплатный аудит \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>