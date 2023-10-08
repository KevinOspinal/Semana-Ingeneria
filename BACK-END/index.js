const express = require('express')
const app = express();
const cors = require('cors')
const { createHeadquarters, getHeadquarters,DeleteHeadquarters,updateHeadquarters } = require('./Controllers/Headquarters/Headquartes.controllers.js')
app.use(cors())
app.use(express.json())

//METODO PARA CREAR UNA SEDE CARES MONDA
app.post('/createHeadquarters', createHeadquarters)

//METODO PARA MOSTRAR UNA SEDE CARES ALEXIS NANDO CAMILO
app.get('/getHeadquarters', getHeadquarters)

//METODO PARA ELIMINAR Y VALER MONDA
app.delete('/deleteHeadquarters/:id', DeleteHeadquarters);

//METODO PARA EDITAR LA MONDA DE LAS SEDES
app.put('/updateHeadquarters/:id', updateHeadquarters);


app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
