class ProductManager{ 
    constructor () {
        this.products = [];
        this.nextId = 1;
    }


    addProduct(title, description, price, thumbnail, code, stock) {

        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`❗ Todos los campos son obligatorios `)
            return;
        }


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
}

const productManager = new ProductManager();
productManager.addProduct('Coca Cola','Botella de 2.5 lts',35.8,'ruta de imagen',001,20)
productManager.addProduct('sprite','Botella de 1.5 lts',25,'ruta de imagen',002,20)
productManager.addProduct('sprite','Botella de 1.5 lts',25,'ruta de imagen',002,20)
productManager.addProduct()

console.log(productManager.products)
console.log("---------------------------")
console.log(productManager.getProduct())
console.log("---------------------------")
console.log(productManager.getProductById(1))
