const express = require('express')
const app = express();
const cors = require('cors')
const conexion = require('./db.js')
const createHeadquarters = require('./Controllers/Headquarters/Headquartes.controllers.js')
app.use(cors())
app.use(express.json())


app.post('/createHeadquarters',createHeadquarters)

app.get('/getHeadquarters', (req, res) => {
    conexion.query('SELECT * FROM tb_sedes',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Error al imprimir la sede' });
            } else {
                console.log('La mostro la sede con éxito');
                res.json(result); // Enviar el resultado como un objeto JSON
            }
        }
    )
})

app.listen(3000,() =>{
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
