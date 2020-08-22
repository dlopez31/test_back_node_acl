const { products } = require('../models/product-model');

const getAllProduct = () => products;

const getProductByCode = (code) => products.find((product) => product.code == code.toUpperCase());

const getCheckout = async (productsProcesado) => {
  const total = await getTotal(productsProcesado);
  const totalDiscount = await getDiscount(productsProcesado);
  return {
    total,
    totalDiscount,
    totalToPay: total - totalDiscount
  };
}

const getTotal = (products) => {
  return new Promise((resolve, reject) => {
    const total = products.reduce((acc, obj) => acc + obj.price, 0);
    resolve(total);
  });
}

const getDiscount = (products) => {
  return new Promise((resolve, reject) => {
    const total = products.reduce((acc, obj) => acc + obj.discount, 0);
    resolve(total);
  });
}




module.exports = { getAllProduct, getProductByCode, getCheckout };
