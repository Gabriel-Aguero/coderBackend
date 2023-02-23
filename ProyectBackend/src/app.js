const express = require('express');
const { addListener } = require('nodemon');
const ProductsManager = require('./ProductManager');

const app = express();
const PORT = 5000
const productManager = new ProductsManager();


app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`)
    next();
})

app.use(express.json())

// Recuperar Lista de Productos
app.get('/products', (req, res) => {
    // if(req.query.limit){
    //     res.send('Devuelve listado limitado de productos')
    // }else {
    //     res.json(ProductManager.getProduct);
    // }
    const products = productManager.getProduct();
    res.send(products);
})

//Cargar Productos
app.post('/products', (req, res) => {
    const newProducts = {...req.body } 
    // const newProducts = req.body;
    productManager.addProduct(newProducts);
    res.send(newProducts);
})

// Recuperar un Producto por su ID
app.get('/products/:pid', (req, res) =>{
    const id = parseInt(req.params.pid);
    const productFind = productManager.getProductById(id);
    if(productFind){
        res.send(productFind);
    } else {
        res.send('No se ha encontrado ningun producto');
    }
})

//Eliminando un producto
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(productManager.deleteProduct(id));
})

//Actualizando un producto
app.put('/products/:id', (req, res) => {
    const newid = parseInt(req.params.id);  
    const newProducts = {...req.body, id: newid};
    res.send(productManager.updateProduct(newProducts));
})



app.use((req, res) => {
    res.status(404).send('No se encontro la ruta...')
})

app.listen(PORT, ()=> {
    console.log(`Escuchando peticiones con express`)
})