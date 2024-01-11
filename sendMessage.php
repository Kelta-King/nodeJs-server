<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once __DIR__ . '/twilio-php-main/src/Twilio/autoload.php';

$sid = "";
$token = "";
$client = new Twilio\Rest\Client($sid, $token);

// Use the Client to make requests to the Twilio REST API
$msg = $client->messages->create(
    // The number you'd like to send the message to
    '+91XXXXXXXXXX',
    [
        // A Twilio phone number you purchased at https://console.twilio.com
        'from' => '+15039286467',
        // The body of the text message you'd like to send
        'body' => "Hey Jenny! Good luck on the bar exam!"
    ]
);
print($msg->sid);
?>