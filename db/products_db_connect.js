const mongoose = require('mongoose');

const {ProductSchema} = require('../models/products');

//Select type of promise will return mongoose queries;
mongoose.Promise = global.Promise;
//Mongoose configuration
const product_conn = mongoose.createConnection(process.env.MONGODB_PRODUCTS_URI || 'mongodb://mongo:27017/Products', {}, (err) =>{
    if (err) console.log('Unable to connect with Products database', err);
    console.log('Connected to Products database');
});

const Product = product_conn.model('Product', ProductSchema);

module.exports = {Product};