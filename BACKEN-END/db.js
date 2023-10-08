const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'seming_db',
    password:''
})

module.exports = conexion;
