<?php
require('stripe-php-10.3.0/init.php');
    // Make sure that the request is a POST request
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get the data from the POST request
        $data = json_decode(file_get_contents('php://input'), true);

        // This is your test secret API key.
        \Stripe\Stripe::setApiKey('pk_test_51MGPh3HC60zm15t9Aj5zlcbcbzNga4R3eipg3qq76or4Fg12GQIhsTDBr3xuz1Shvuh9qcF38wOS8LIHC28nCmW900x1Q5XwxI');

        header('Content-Type: application/json');

        $YOUR_DOMAIN = 'https://ivm108.informatik.htw-dresden.de/ewa/g09/beleg';

            foreach ($data as $item) {
                array_push($lineItems, array(
                    'price_data' => array(
                        'currency' => 'eur',
                        'unit_amount' => round(floatval($item['PreisNetto']) * 100),
                        'product_data' => array(
                            'name' => $item['Produkttitel'],
                            'images' => array($item['Linkgrafikdatei']),
                        )
                    ),
                    'quantity' => $item['quantity'],
                ));
            }
            // Create a Stripe Checkout Session
            try {
                // Your Stripe API calls here
                //create the session
                $session = \Stripe\Checkout\Session::create([
                    'payment_method_types' => ['card'],
                    'line_items' => $lineItems,
                    'mode' => 'payment',
                    'success_url' => 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
                    'cancel_url' => 'https://example.com/cancel',
                ]);
            } catch (\Stripe\Error\Base $e) {
                    // Handle error
                    echo 'Error: ' . $e->getMessage();
                }

        header("HTTP/1.1 303 See Other");
        header("Location: " . $checkout_session->url);
        echo json_encode(array("status" => "success", "message" => "Data received successfully.", "data" => $data));
    } else {
        // Send an error response if the request is not a POST request
        echo json_encode(array("status" => "error", "message" => "Invalid request method."));
    }
?>