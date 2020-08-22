const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const productRoutes = require('./routes/product-router');
const { PORT } = require('./config');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/product', productRoutes);

app.listen(PORT, () => {
  console.log('Express server puerto: ' + PORT + ': \x1b[32m%s\x1b[0m', 'online');
});

