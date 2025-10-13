const express = require('express');
const mongoose = require('mongoose');

const app = express();

const hostname = '127.0.0.1';
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://abinashnathpandey_db_user:oiDj2UVVy2b9PDbc@cluster0.107xxct.mongodb.net/').then(res => {
    console.log('Connected to MongoDB Successfully !!!')
}).catch(err => {
    console.log('Error connecting to MongoDB::: ', err);
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});