// Add dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express()
// Set port
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Routes
require('./routes/api-route')(app);
require('./routes/html-routes')(app);

app.listen(PORT, ()=> {
	console.log("Listening Port 3000");
});