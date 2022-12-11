const db = require("../../../database/index");

class ProductRepository{

    async findAll(){
        const rows = await db.query("SELECT * FROM products")
        return rows;
    }

    async findById(id){
        const [row] = await db.query('SELECT * FROM products WHERE id_product = ?', [id]);   
        return row;
    }

    async create({name_product, price_product, descricao_product}){
        const row = await db.query(`
            INSERT INTO products(name_product, price_product, descricao_product) 
            VALUES(?, ?, ?)
        `, [name_product, price_product, descricao_product]);

        return [{status:"200", message:"Produto adicionado com sucesso!"}];
    }

    update(){}

    delete(){}

}

module.exports = new ProductRepository();