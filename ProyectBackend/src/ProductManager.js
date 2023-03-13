class ProductManager {

    constructor(path) {
        this.products = [];
        this.path = path;
        this.nextId = 1;
    }

    addProduct = async({ title, description, price, thumbnail, code, stock }) => {
      
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`❗ Todos los campos son obligatorios `)
            return;
        }

        // console.log(`El codigo es: ${code} `);
        // if(this.getProductByCode(code)) {
        //     console.log(`♦ El producto con el codigo ${code} ya existe `)
        //     return;
        // }

        const product =  {
            id: this.nextId,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.nextId++;
        this.products.push(product);
        console.log('Productos Agregados Correctamente!!!')
        
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

module.exports = ProductManager;