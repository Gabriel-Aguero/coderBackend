class ProductManager{ 
    constructor () {
        this.products = [];
        this.path = "";
        this.nextId = 1;
    }


    addProduct(title, description, price, thumbnail, code, stock) {

        // if(!title || !description || !price || !thumbnail || !code || !stock) {
        //     console.log(`❗ Todos los campos son obligatorios `)
        //     return;
        // }


        if(this.getProductByCode(code)) {
            console.log(`♦ El producto con el codigo ${code} ya existe `)
            return;
        }


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

    getProductByCode(code) {
        return this.products.find(product => product.code === code)
    }

    getProduct(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find(product => product.id === id);
        if(!product){
         console.log(`Not found`);            
        }
        return product;
    }

    updateProduct(id, title, description, price, thumbnail,code, stock) {
        const product = this.getProductById(id)
        if(!product){
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
        if(productIndex === -1){
            console.log("Este producto no existe");
            return;
        }
        this.products.splice(productIndex, 1);
        console.log('Producto Eliminado Correctamente...')
    }

}

export default ProductManager;