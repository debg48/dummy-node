const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware to parse JSON
app.use(express.json());

// Route for homepage
app.get('/', (req, res) => {
    res.render('homepage');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
