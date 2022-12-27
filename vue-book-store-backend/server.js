// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
// import Morgan
import morgan from "morgan"
// import session
import session from "express-session"
// import MySQLStore
import MySQLStore from 'express-mysql-session';
// import dotnet
import dotenv from 'dotenv';
// and call config() to configure env vars from .env
import cookieSession from 'cookie-session'

dotenv.config();

const SESS_TIME = process.env.SESS_LIFETIME
const IN_PROD = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT
const TWO_HOURS = 1000 * 60 * 60 * 2

// init express
const app = express();

const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // Whether or not to automatically check for and clear expired sessions:
	clearExpired: true,
	// How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: 900000,
	// The maximum age of a valid session; milliseconds:
	expiration: 86400000,
	// Whether or not to create the sessions database table, if one does not already exist:
	createDatabaseTable: true,
    endConnectionOnClose: true,
	charset: 'utf8mb4_bin',
    schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
  };

const sessionStore = new MySQLStore(options, session);

// use cors
const corsOptions = {
  origin: 'http://localhost:8080',  //Your Client, do not write '*'
  credentials: true,
};
app.use(cors(corsOptions));
// to output request details on the console, store HTTP requests and give concise insight into how app is being used, 
// and where there could be potential errors or other issues that haven’t yet explored
app.use(morgan('default'));
 //use express bodyparser to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    key: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: TWO_HOURS,
        sameSite: 'none',
    }
  }));

// use router
app.use(Router);



// add to Cart
app.post('/addCart', (req, res, data) => {
  console.log('*****************Adding Cart*****************');
  // retrieve the productId from the request body
  const cartItem = req.body;

  // check if the user has an existing session
  if (req.session.cart) {
    // if the user has an existing session, add the product to the shopping cart
    res.setHeader('Content-Type', 'text/html')
    req.session.cart.push(cartItem);
  } else {
    // if the user does not have an existing session, create a new shopping cart
    req.session.cart = [cartItem];
  }
  req.session.save(function(err){
    if (err){
      throw err;
    }
    console.log('Saving Cart');
    // send a response to the client
    res.send(req.session.cart);
  })
});

// Get Cart
app.get('/getCart', (req, res) => {
  // retrieve the shopping cart from the session
  const cart = req.session || [];
  // send the shopping cart to the client
  console.log('Sending Cart');
  console.log(req.session.cart);
  res.send(req.session.cart);
});


app.listen(PORT, () => console.log('Server running at http://localhost:',PORT));
