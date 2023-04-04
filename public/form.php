<?php
require 'vendor/autoload.php';

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

use phpmailer\phpmailer\PHPMailer;
use phpmailer\phpmailer\Exception;

$method = $_SERVER['REQUEST_METHOD'];

if($method === 'POST') {
    try {
        // $senderName = filter_input(INPUT_POST, 'name');
        // $senderEmail = filter_input(INPUT_POST, 'email');
        // $senderSubject = filter_input(INPUT_POST, 'subject');
        // $senderMessage = filter_input(INPUT_POST, 'message');
        

        $mail = new PHPMailer(true);
        //Server settings
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'contato@samuelalmeidadev.com.br';                     //SMTP username
        $mail->Password   = 'Sawmusic270902#';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('contato@samuelalmeidadev.com.br', $senderName);     //Add a recipient
        $mail->addAddress('contato@samuelalmeidadev.com.br');               //Name is optional
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $senderSubject;
        $mail->Body = '<strong>Email: '.$senderEmail.'</strong> <br/><br/> <strong>Main message: '.$senderMessage.'</strong>';
    
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
