const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoute');

// Init Express
const app = express();

// Environment 
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

// Data Manage
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// Static File
app.use(express.static('public'));

// Init Router
app.use('/', pageRoute);


// Create Server
app.listen(PORT, () => {
    console.log(`Your Server Is Running On Port ${PORT}`.green);
});
