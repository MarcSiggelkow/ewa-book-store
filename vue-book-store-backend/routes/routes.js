// import express
import express from "express";

  

// import function from controller
import { insertCart, showCart, showProducts, showRecentlyProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";



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


// Insert into Cart
router.post('/add-to-cart', insertCart);


// Show Cart
router.get('/cart', showCart);


router.post('/save-cart', (req, res, data) => { 
    if (!req.session.cart) {
        return res.render('cart', {
          products: null
        });
      }
      var cart = new Cart(req.session.cart);
      res.render('cart', {
        title: 'NodeJS Shopping Cart',
        products: cart.getItems(),
        totalPrice: cart.totalPrice
      });
});

router.get('/get-cart', (req, res) => { 
    console.log('ich der Angefragte Warenkorb vom User: ', req.session.cart); 
    res.json(req.session.cart);
});

// export default router
export default router;