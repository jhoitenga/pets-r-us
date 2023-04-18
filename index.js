const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Customer = require('./models/customer');


// Set Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Connecting to Mongo
const CONN = 'mongodb+srv://jahoitenga:s3cret1@bellevueuniversity.g473hiy.mongodb.net/web340DB';

// Showing Server Connection Messages
mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
});

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

// View to the Training page
app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us: Training',
        message: 'Pets-R-Us: Training'
    });
});

// View to the Registration page
app.get('/registration', (req, res) => {
    res.render('registration', {
        title: 'Pets-R-Us: Registration',
        message: 'Pets-R-Us: Registration'
    });
}); 

// HTTP Post to the Registration
app.post('/registrations', async (req, res, next) => {
    console.log(req.body);
    const newCustomer = new Customer({
        customerId: req.body.customerId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        email: req.body.email,
        agree: req.body.agree
    });
    
    // If successful, route to Home page otherwise show error
    const customer = await Customer.create(newCustomer);

    // Converted callback to Async/Await
    if (customer) {
        res.render('index', {
            title: 'Pets-R-Us'
        });
        } else {
            console.log(err);
            next(err);
    }
  });



app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});
