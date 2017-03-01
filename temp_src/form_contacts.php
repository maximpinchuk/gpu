<?php

$recepient = "pinchevski@yandex.ru";
$sitename = "GPU";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["msg"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nСообщение: $msg";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>