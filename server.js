// Add dependencies
const express = require('express');
// Routes
const apiRoute = require('./routes/api-route');
const html = require('./routes/html-routes');

const app = express()
// Set port
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoute)
app.use(html)

app.listen(PORT, ()=> {
	console.log("Listening Port 3000");
});

