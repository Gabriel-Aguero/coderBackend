import { Router } from 'express'

const { addListener } = require('nodemon');
const ProductsManager = require('../ProductManager');

const productManager = new ProductsManager();
const router = Router();

// Recuperar Lista de Productos
router.get('/', (req, res) => {
    // if(req.query.limit){
    //     res.send('Devuelve listado limitado de productos')
    // }else {
    //     res.json(ProductManager.getProduct);
    // }
    const products = productManager.getProduct();
    res.send(products);
})

//Cargar Productos
router.post('/', (req, res) => {
    const newProducts = {...req.body } 
    // const newProducts = req.body;
    productManager.addProduct(newProducts);
    res.send(newProducts);
})

// Recuperar un Producto por su ID
router.get('/:pid', (req, res) =>{
    const id = parseInt(req.params.pid);
    const productFind = productManager.getProductById(id);
    if(productFind){
        res.send(productFind);
    } else {
        res.send('No se ha encontrado ningun producto');
    }
})

//Eliminando un producto
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(productManager.deleteProduct(id));
})

//Actualizando un producto
router.put('/:id', (req, res) => {
    const newid = parseInt(req.params.id);  
    const newProducts = {...req.body, id: newid};
    res.send(productManager.updateProduct(newProducts));
})

module.exports = router;