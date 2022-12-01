//CONEXÃO COM O MYSQL
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "...",
    port: 000,
    user: "...",
    password: "...",
    database: "...",
});

connection.connect( (error) => {
    if(error) return console.log(error)
    console.log("🚀 Conexão efetuada com sucesso")
})

exports.query = async(query, values) => {
    const { rows } = await connection.query(query, values);
    return rows;
}