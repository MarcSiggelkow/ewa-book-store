// Import function from Product Model

import { addToCart, getCart, getProducts, getRecentlyProducts, getProductById, insertProduct, updateProductById, deleteProductById } from "../models/productModel.js";


// Get All Products
export const insertCart = (req, res) => {

    const data = req.body;
    const values = [data.Produktcode, data.Produkttitel, data.Autorname, data.Genre, data.Verlagsname, data.PreisNetto, data.Kurzinhalt, data.LinkGrafikdatei,1];

    addToCart(values, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Get All Products
export const showCart = (req, res) => {
    getCart((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get recently added Products
export const showRecentlyProducts = (req, res) => {
    getRecentlyProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Product 
export const showProductById = (req, res) => {

    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Product
export const createProduct = (req, res) => {

    const data = req.body;

    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Product
export const updateProduct = (req, res) => {

    const data  = req.body;
    const id    = req.params.id;

    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// Delete Product
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}