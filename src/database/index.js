//CONEXÃO COM O MYSQL
const { createConnection } = require("mysql2")

const connection = new createConnection({
    host: "0",
    port: 0,
    user: "0",
    password: "0",
    database: "0",
});

connection.connect( (error) => {
    if(error) throw error;
    console.log("🚀 Conexão efetuada com sucesso")
})

exports.query = async (query, values) => {
    const rows = await connection.promise().query(query, values);
    return rows[0];
};
