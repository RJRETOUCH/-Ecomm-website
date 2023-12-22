const express = require('express');
const app = express();
const products = require('./routes/product')
const routes = require('./routes/productCategories');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const orders = require('./routes/orders');

const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.use('/productCategories', routes);
app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);

const server = app.listen(PORT, () => console.log("Server is running"));