<?php
	$owner_email = "info@tasenergy.com.ua"; // емейл на который отправляются письма
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'];
	$messageBody = "";

	if($_POST["whatForm"] != ''){
		$messageBody .= '<p><strong>Форма:</strong> ' . $_POST["whatForm"] . '</p>' . "\r\n";
	}

	if($_POST['name'] != ''){
		$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
		$messageBody .= '<p><strong>Имя:</strong> ' . $name . '</p>' . "\r\n";
	}
	if($_POST['phone'] != ''){
		$phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
		$messageBody .= '<p><strong>Номер телефона:</strong> ' . $phone . '</p>' . "\r\n";
	}
	if($_POST['mail'] != ''){
		$mail = substr(htmlspecialchars(trim($_POST['mail'])), 0, 100);
		$messageBody .= '<p><strong>Номер телефона:</strong> ' . $mail . '</p>' . "\r\n";
	}
	try{
		if(!mail($owner_email, $subject, $messageBody, $headers)){
			throw new Exception('mail failed');
		} else {
			echo 'mail sent';
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}
?>


