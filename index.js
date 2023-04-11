const express = require('express');
const path = require('path');
const app = express();

// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// View to the Landing page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home Page',
        message: 'Pets-R-Us: Home Page'
    });
});

// View to the Grooming page
  app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        message: 'Pets-R-Us: Grooming'
    });
});

// View to the Boarding page
app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding',
        message: 'Pets-R-Us: Boarding'
    });
});

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});