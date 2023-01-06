import mysql from "mysql2";
// import dotnet
import dotenv from 'dotenv';
   

// create the connection to database

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_NAME,

    password: process.env.DB_PASS,

    database: process.env.DB_DATABASE

});

  

export default db;