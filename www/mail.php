<?php
// входные данные
if(!isset($_POST['edrpou']) && !isset($_POST['email']) && !isset($_POST['phone'])) die('forbidden');
$edrpou = $_POST['edrpou'];
$email = $_POST['email'];
$phone = $_POST['phone'];
//$volume = isset($_POST['volume']) ? $_POST['volume'] : 'Не вказано';

// тестовые данные, удалить
/*
$edrpou = '1125992';
$email = 'test@mail.ru';
$volume = 12300;
*/

// получатель письма (info@tasenergy.com.ua)
$to = 'dim2sik@gmail.com';

// отправитель письма
$from = 'info@tasenergy.com.ua';

// тема письма
$subject = 'New Request';

// текст письма
$message = "New request from tasenergy.com.ua:" . PHP_EOL;
$message .= "ЄДРПОУ: " . $edrpou . PHP_EOL;
$message .= "Електронна адреса: $email" . PHP_EOL;
$message .= "Телефон: $phone";

// отправка письма
$headers = "From: $from\r\n" .
    "Reply-To: $from\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);

// редирект после отправки
Header('Location: /company.html');
?>