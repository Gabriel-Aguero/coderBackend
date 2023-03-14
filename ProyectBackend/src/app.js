const path = require('path');
const ProductManager = require('./ProductManager');

const mainProduct = async () => {
    try {
       const dbPath = path.join(`${__dirname}/db_products.json`);
       const productManager = new ProductManager(dbPath)
       const listProduct = await productManager.getProduct(); 
       console.log(listProduct); 
    } catch (error) {
        console.log(error);
    }
}


