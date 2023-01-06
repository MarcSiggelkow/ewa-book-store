// import connection
import db from "../config/db.config.js";

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM buecher", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get recently added Products
export const getRecentlyProducts = (result) => {
    db.query("SELECT * FROM buecher ORDER BY date_added DESC LIMIT 4", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM buecher WHERE ProduktID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO cart SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Product to Database
export const updateProductById = (data, id, result) => {

    db.query("UPDATE buecher SET Produkttitel = ?, PreisNetto = ? WHERE ProduktID = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM buecher WHERE ProduktID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}