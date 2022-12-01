const ProductRepository = require("../../repositories/Product/ProductRepository");

class ProductController {

    index(request, response){
        console.log("Cheguei aqui")
        const products = ProductRepository.findAll();
        response.send("Index do controller")
    }

    show(){

    }

    store(){

    }

    update(){

    }

    delete(){
        
    }

}

module.exports = new ProductController;