// Imports
const express = require('express');

//const path = require('path');
const logger = require('pino');

// Express app variable
const app = express();

// Set views
app.set("views", path.join(__dirname, "views"));

// Use ejs as the view engine
app.set("view engine", "ejs");

// Set static files, folder: public, has images and stylesheets
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/site", express.static(path.join(__dirname, "public/stylesheets")));

// Holds server port value
const PORT = process.env.PORT || 3000;

// Calling Landing Page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        message: 'Welcome to the Home Page!'
    })
});

//Listens on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
