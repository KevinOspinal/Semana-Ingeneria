const mysql = require('mysql')

//FUNCION PARA HACER LA CONEXION A LA BASE DE DATOS
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'Seming_db2',
    password:''
})

module.exports = conexion;
