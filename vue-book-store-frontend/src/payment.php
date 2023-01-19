<?php
require('stripe-php-10.3.0/init.php');

// Get the data from the POST request
$data = json_decode(file_get_contents('php://input'), true);

// Set domain
$YOUR_DOMAIN = 'http://ivm108.informatik.htw-dresden.de/ewa/g09/beleg/';

// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51MGPh3HC60zm15t9R1uG5MQjJUMqjKI8O6DJLQS3QgFQGtAvsZZZL83Va7C4o6iiiSr4VgTyxnGFgeRlBm2w84e500KaqdrvNT');

$lineItems = array();
foreach ($data as $item) {
  array_push($lineItems, array(
    'price_data' => array(
      'currency' => 'eur',
      'unit_amount' => round(floatval($item['PreisNetto']) * 100),
      'product_data' => array(
          'name' => $item['Produkttitel'],
      ),
    ),
    'quantity' => $item['quantity'],
  ));
}

$checkout_session = \Stripe\Checkout\Session::create([
    'success_url' => $YOUR_DOMAIN ,
    'cancel_url' => $YOUR_DOMAIN ,
    'line_items' => [$lineItems],
    'mode' => 'payment',
  ]);

  header('Content-Type: application/json');
    echo json_encode(array("sessionUrl" => $checkout_session['url']));
?>