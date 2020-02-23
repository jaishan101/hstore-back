const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authenticate = require('./api/middleware/authenticate');
//sdfdsas
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20C', {useNewUrlParser: true,useUnifiedTopology: true});

const adminRoutes = require('./api/routes/admins');
const categoryRoutes = require('./api/routes/categories');
const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products');
const cartItemRoutes = require('./api/routes/cartItems');
const orderRoutes = require('./api/routes/orders');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/admin', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/user', userRoutes); 
app.use('/products', productRoutes);
app.use('/cart', authenticate, cartItemRoutes);
app.use('/order', authenticate, orderRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})


module.exports = app;