<?php
// входные данные
if(!isset($_POST['edrpou']) && !isset($_POST['email']) && !isset($_POST['phone'])) die('forbidden');
$edrpou = $_POST['edrpou'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$volume = isset($_POST['volume']) ? $_POST['volume'] : 'Не вказано';

// тестовые данные, удалить
/*
$edrpou = '1125992';
$email = 'test@mail.ru';
$volume = 12300;
*/

// получатель письма (info@tasenergy.com.ua)
$toEmail = 'dim2sik@gmail.com';
$toUserName = 'tasenergy.com.ua';

// отправитель письма
$fromEmail = 'info@tasenergy.com.ua';
$fromUserName = 'tasenergy.com.ua';

// тема письма
$subject = 'Фіксація літньої ціни';

// текст письма
$message = "New request from tasenergy.com.ua:" . PHP_EOL;
$message .= "ЄДРПОУ: " . $edrpou . PHP_EOL;
$message .= "Електронна адреса: $email" . PHP_EOL;
$message .= "Телефон: $phone";

// отправка письма

////////////////////
// SendGrid BEGIN //
////////////////////
require("sendgrid-php/sendgrid-php.php");

$SG_API_KEY='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';

$from = new \SendGrid\Mail\From($fromEmail, $fromUserName);
$subject = new \SendGrid\Mail\Subject($subject);
$to = new \SendGrid\Mail\To($toEmail, $toUserName);
$plainTextContent = new \SendGrid\Mail\PlainTextContent(
    $message
);
$htmlContent = new \SendGrid\Mail\HtmlContent(
    "<pre>" . $message . "</pre>"
);
$email = new \SendGrid\Mail\Mail(
    $from,
    $to,
    $subject,
    $plainTextContent,
    $htmlContent
);

//$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
$sendgrid = new \SendGrid($SG_API_KEY);
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
//////////////////
// SendGrid END //
//////////////////

// редирект после отправки
Header('Location: /company.html');
?>
