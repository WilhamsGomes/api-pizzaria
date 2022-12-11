const ProductRepository = require("../../repositories/Product/ProductRepository");

class ProductController {

    async index(request, response){
        const products = await ProductRepository.findAll();
        response.send(products);
    } 

    async show(request, response){

        const { id } = request.params;
        const product = await ProductRepository.findById(id);
        if (!product){
            return response.status(404).json({error: "Product not found"});
        }
        response.json(product);

    }

    async store(request, response){

        const {name_product, price_product, descricao_product} = request.body;

        if(!name_product){
            return response.status(400).json({error: "Name product is required"});
        }

        const product = await ProductRepository.create({
            name_product, price_product, descricao_product
        });
        response.json(product);

    }

    update(){

    }

    delete(){
        
    }

}

module.exports = new ProductController;