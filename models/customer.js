const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating a new mongoose model named Customer with properties for customerId and email
let customerSchema = new Schema({
    customerId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

// Exporting the model
module.exports = mongoose.model('Customer', customerSchema);