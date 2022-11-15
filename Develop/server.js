// Add dependencies
const express = require('express');
const path = require('path');

const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Routes
require('./routes/api-route')(app);
require('./routes/html-routes')(app);

//listen to port
app.listen(3000);