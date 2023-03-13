const express = require("express");
const ProductsManager  = require("./ProductManager");

const PORT = 5000;

const productManager = new ProductsManager();
const app = express();

app.use(express.json()); // sin esto no podemos ver el req.body

// Muestra el listado de productos
app.get(`/`, (req, res) => {
    const products = productManager.getProducts();
    res.send(products);
});

// Cargar un producto
app.post(`/`, (req, res) => {
    const newProducts = {...req.body } 
    productManager.addProduct(newProducts);
    res.send(newProducts);
})

// Recuperar un Producto por su ID
app.get('/:pid', (req, res) =>{
    const id = parseInt(req.params.pid);
    const productFind = productManager.getProductById(id);
    if(productFind){
        res.send(productFind);
    } else {
        res.send('No se ha encontrado ningun producto');
    }
})

//Eliminando un producto
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(productManager.deleteProduct(id));
})

//Actualizando un producto
app.put('/:id', (req, res) => {
    const newid = parseInt(req.params.id);  
    const newProducts = {...req.body, id: newid};
    res.send(productManager.updateProduct(newProducts));
})

app.use((req, res) => {
    res.status(404).send('No se encontro la ruta...')
})

app.listen(PORT, () => {
  console.log(`API RUNNING ON PORT ${PORT}`);
});