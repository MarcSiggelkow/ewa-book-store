<?php
require('stripe-php-10.3.0/init.php');

// Get the data from the POST request
$data = json_decode(file_get_contents('php://input'), true);

// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51MGPh3HC60zm15t9R1uG5MQjJUMqjKI8O6DJLQS3QgFQGtAvsZZZL83Va7C4o6iiiSr4VgTyxnGFgeRlBm2w84e500KaqdrvNT');

// Set domain
$YOUR_DOMAIN = 'http://ivm108.informatik.htw-dresden.de/ewa/g09/beleg/';

 echo $stripe->checkout->sessions->create([
    'success_url' => 'https://example.com/success',
    'cancel_url' => 'https://example.com/cancel',
    'line_items' => [
      [
        'price' => 'price_H5ggYwtDq4fbrJ',
        'quantity' => 2,
      ],
    ],
    'mode' => 'payment',
  ]);
$checkout_session = \Stripe\Checkout\Session::create([
    'line_items' => [[
      # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
      'price' => '{{PRICE_ID}}',
      'quantity' => 1,
    ]],
    'mode' => 'payment',
    'success_url' => $YOUR_DOMAIN . '/success.html',
    'cancel_url' => $YOUR_DOMAIN . '/cancel.html',
  ]);

  header("HTTP/1.1 303 See Other");
  header("Location: " . $checkout_session->url);
?>