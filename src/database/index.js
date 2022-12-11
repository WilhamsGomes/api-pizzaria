//CONEXÃO COM O MYSQL
const { createConnection } = require("mysql2")

const connection = new createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "pizzaria",
});

connection.connect( (error) => {
    if(error) throw error;
    console.log("🚀 Conexão efetuada com sucesso")
})

exports.query = async (query, values) => {
    const rows = await connection.promise().query(query, values);
    return rows[0];
};
