const express = require('express');
const app = express();

// Tell our app to use EJS as the template engine
app.set('view engine', 'ejs');

// Route for the homepage
app.get('/', (req, res) => {
    // We pass data (a username variable) straight to our webpage!
    res.render('index', { username: 'Future Web Developer' });
});

app.listen(3000, () => {
    console.log('Server running on port ${Port}');
});