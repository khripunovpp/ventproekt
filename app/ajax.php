<?php

$tell = htmlspecialchars($_POST["phone"]);
$form = htmlspecialchars($_POST["form"]);

if (!empty($tell)) {

	// $to = 'khripunovpp@gmail.com, mskkonoval@gmail.com ';
	$to = 'khripunovpp@gmail.com';
	$subject = 'Системы вентиляции';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; utf-8' . "\r\n";
	$headers .= 'From:  Системы вентиляции <info@ventproekt.pro>' . "\r\n";
	$message = "
							<table>
								<tr>
									<td><b>Контактный телефон</b></td>
									<td>$tell</td>
								</tr>
								<tr>
									<td colspan=\"2\">Сообщение создано автоматически!</td>
								</tr>
							</table>
							";
				
	mail($to, $subject, $message, $headers);

	$jsonout = '{"form": "'.$form.'", "status": "success", "message": "Спасибо! Ваша заявка принята. Наш оператор свяжется с вами в течение 15 минут."}';

} else {

	$jsonout = '{"form": "'.$form.'", "status": "error", "message": "Без номера телефона мы не сможем вам помочь."}';
	
}

echo $jsonout;

?>