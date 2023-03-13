const { readFile } = require('fs');
const fs = require('fs/promises');

let promesaEscritura = new Promise((resolve, reject) => {
    fs.writeFile("", (err) => { 
       if(err) {
        reject(err);
       } else {
        resolve();
       } 
    })
});


class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}
class ProductManager {

    constructor(path) {
        this.products = [];
        this.path = path;
        this.nextId = 1;
    }

    addProduct = async({ title, description, price, thumbnail, code, stock }) => {
        try {
            this.products = await this.getProduct(); 
            if (this.products.length === 0) { 
            const id = 1 
            this.products.push({ id, title, description, price, thumbnail, code, stock }) 
            return await fs.writeFile(this.path, JSON.stringify(this.products)) 
        } 
        else { 
                const id = this.products.length + 1 
                this.products.push({ id, title, description, price, thumbnail, code, stock })
                return await fs.writeFile(this.path, JSON.stringify(this.products)) 
             } 
        } 
        
        catch (error) 
        { 
            console.log(error) 
        }
        
    }

    getProduct(){
        return this.products;
    }

    updateProduct(id, title, description, price, thumbnail, code, stock) {
        const product = this.getProductById(id)
        if (!product) {
            return;
        }

        product.title = title || product.title;
        product.description = description || product.description;
        product.price = price || product.price;
        product.thumbnail = thumbnail || product.thumbnail;
        product.code = code || product.code;
        product.stock = stock || product.stock
        console.log('Datos Actualizados Correctamente...👌')
    }

    deleteProduct(id){
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            console.log("Este producto no existe");
            return;
        }
        this.products.splice(productIndex, 1);
        console.log('Producto Eliminado Correctamente...')
    }

}