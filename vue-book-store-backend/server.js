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
app.use(cors());
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
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    cookie: {
        httpOnly: true,
        maxAge: TWO_HOURS,
        sameSite: true,
        secure: IN_PROD
    }
  }));

// use router
app.use(Router);

app.get('/', (req, res) => {
    if(!req.session.test) {
      req.session.test = 'OK';
      res.send('OK');
    }
  });
  app.get('/test', (req, res) => {
    res.send(req.session.test); // 'OK'
  });
app.listen(PORT, () => console.log('Server running at http://localhost:',PORT));
