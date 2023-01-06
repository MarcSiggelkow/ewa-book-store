// import express
import express from "express";
// import dotnet
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import Stripe from 'stripe'
//const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = Stripe('sk_test_51MGPh3HC60zm15t9R1uG5MQjJUMqjKI8O6DJLQS3QgFQGtAvsZZZL83Va7C4o6iiiSr4VgTyxnGFgeRlBm2w84e500KaqdrvNT');

// import function from controller
import { showProducts, showRecentlyProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";



// init express router
const router = express.Router();


// Get All Product
router.get('/products', showProducts);

// Get recently added Product
router.get('/latestproducts', showRecentlyProducts);

// Get Single Product
router.get('/products/:id', showProductById);


// Create New Product
router.post('/products', createProduct);


// Update Product
router.put('/products/:id', updateProduct);


// Delete Product
router.delete('/products/:id', deleteProduct);

router.post('/checkout-session', async (req, res) => {
    const YOUR_DOMAIN = 'http://localhost:8080';
    try {
      // Calculate the total price of the cart
      const lineItems = [];
      console.log(req.body);
      for (const item of req.body) {
        lineItems.push({
          price_data: {
            currency: 'eur',
            unit_amount: Math.round(Number(item.PreisNetto) * 100),
            product_data: {
                name: item.Produkttitel,
                images: [item.Linkgrafikdatei],
            },
          },
          quantity: item.quantity,
        });
      }
      console.log(lineItems);
      // Create a Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/thank-you?success=true`,
        cancel_url: `${YOUR_DOMAIN}/checkout?canceled=true`,
      });
  
      // Send the checkout session ID to the client
      console.log('Payment Sucess');
      console.log(session.url);
      //res.setHeader("Content-Type", "text/html");
      //res.redirect(303, session.url);
      res.send({ sessionUrl: session.url });
    } catch (error) {
        console.log(error)
      res.status(500).send(error);
    }
  });
  
// export default router
export default router;