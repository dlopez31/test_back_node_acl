const express = require('express');
const { getAllProduct, getProductByCode, getCheckout } = require("../services/product-service");
const app = express();

app.get("/", (req, res) => {
    res.json(getAllProduct());
});

app.get("/:code", (req, res) => {
    const product = getProductByCode(req.params.code);
    if (!product)
        return res
            .status(404)
            .send("Product not found");
    res.json(product);
});

//Need to calculate total and discount
app.post("/checkout", async (req, res) => {
    const products = req.body.products;
    const productsProcesado = [];
    // validar 
    if (!products || products.length < 1)
        return res
            .status(400)
            .send("Debe enviar al menos un producto.");
    // armar array
    products.forEach(element => {
        const product = getProductByCode(element);
        if (product) productsProcesado.push(product);
    });
    // validar productos procesados
    if (productsProcesado.length < 1)
        return res
            .status(404)
            .send("Products not found");
    const checkout = await getCheckout(productsProcesado);
    const result = {
        total: checkout.total,
        totalDiscount: checkout.totalDiscount,
        totalToPay: checkout.totalToPay,
        product: productsProcesado.map((element) => element.code),
        cantProduct: productsProcesado.length,
    };
    res.json(result);
});

module.exports = app;