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

        await db.query(`
            INSERT INTO products(name_product, price_product, descricao_product) 
            VALUES(?, ?, ?)
        `, [name_product, price_product, descricao_product]);
        return [{status:"200", message:"Produto adicionado com sucesso!"}];
    }

    async update(id, {name_product, price_product, descricao_product}){

        await db.query(`
            UPDATE products
            SET name_product = ?, price_product = ?, descricao_product = ?
            WHERE id_product = ?
        `, [name_product, price_product, descricao_product, id]);

        return [{status:"200", message:"Produto editado com sucesso!"}];
    }

    async delete(id){
        const deleteOp = await db.query("DELETE FROM products WHERE id_product = ?", [id]);
        return deleteOp;
    }

}

module.exports = new ProductRepository();