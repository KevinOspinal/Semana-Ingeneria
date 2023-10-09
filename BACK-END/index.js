const express = require('express')
const app = express();
const cors = require('cors')
const { createHeadquarters, getHeadquarters,DeleteHeadquarters,updateHeadquarters,getOnlyHeadquerters} = require('./Controllers/Headquarters/Headquartes.controllers.js')
const { createUserType, getUserType, getOnlyUserType, deleteUserType, updateUserType } = require('./Controllers/User_Type/User_Type.controllers')
const { createConferences, getConferences, getOnlyConferences, deleteConferences, updateConferences } = require('./Controllers/Conferences/Conferences.controllers')
app.use(cors())
app.use(express.json())

//METODO PARA CREAR UNA SEDE CARES MONDA
app.post('/createHeadquarters', createHeadquarters)
//METODO PARA MOSTRAR UNA SEDE CARES ALEXIS NANDO CAMILO
app.get('/getHeadquarters', getHeadquarters)
//METODO PARA MOSTRAR UNA SOLA SEDE CARES ALEXIS NANDO CAMILO
app.get('/getOnlyHeadquarters/:nombre', getOnlyHeadquerters)
//METODO PARA ELIMINAR Y VALER MONDA
app.delete('/deleteHeadquarters/:id', DeleteHeadquarters);
//METODO PARA EDITAR LA MONDA DE LAS SEDES
app.put('/updateHeadquarters/:id', updateHeadquarters);
//
app.post('/createUserType', createUserType)
app.get('/getUserType', getUserType)
app.get('/getOnlyUserType/:descripcion', getOnlyUserType)
app.delete('/deleteUserType/:id', deleteUserType);
app.put('/updateUserType/:id', updateUserType);
//
app.post('/createConferences', createConferences)
app.get('/getConferences', getConferences)
app.get('/getOnlyConferences/:nombre', getOnlyConferences)
app.delete('/deleteConferences/:id', deleteConferences);
app.put('/updateConferences/:id', updateConferences);

app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
