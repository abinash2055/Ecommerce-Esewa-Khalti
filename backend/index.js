const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const brandRoute = require('./routes/brand');
const productRoute = require('./routes/product');
const uploadFileRoute = require('./routes/upload-file');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const esewaRoute = require('./routes/esewa');

const app = express()
var cors = require('cors');

const hostname = '127.0.0.1';
const port = 5000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

mongoose.connect('mongodb+srv://abinashnathpandey_db_user:oiDj2UVVy2b9PDbc@cluster0.107xxct.mongodb.net/')
    .then(res => {
        console.log("Connected to MongoDB Sucessfully");
    }).catch(err => {
        console.log(err);
    })

    // Routes
app.use('/api/users', authRoute);
app.use('/api/users', userRoute);
app.use('/api/brands', brandRoute);
app.use('/api/products', productRoute);
app.use('/api/upload-files', uploadFileRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/esewa', esewaRoute);

// Serve uploaded files statically
app.use(`/api/uploads`, express.static('uploads'));


// Start server
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});