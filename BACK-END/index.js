const express = require('express')
const app = express();
const cors = require('cors')
const { createHeadquarters, getHeadquarters,DeleteHeadquarters,updateHeadquarters,getOnlyHeadquerters} = require('./Controllers/Headquarters/Headquartes.controllers.js')
const { createUserType, getUserType, getOnlyUserType, deleteUserType, updateUserType } = require('./Controllers/User_Type/User_Type.controllers.js')
const { createConferences, getConferences, getOnlyConferences, deleteConferences, updateConferences } = require('./Controllers/Conferences/Conferences.controllers.js')
const { createOtherEvent, getOtherEvent, deleteOtherEvent, updateOtherEvent} = require('./Controllers/Other_Events/Other_Events_Controllers.js')
const { createProject_Role, getProject_Role, deleteProject_Role, updateProject_Role, getOnlyProject_Role } = require('./Controllers/Project_Role/Project.controller')
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
//-----------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR UN TIPO DE USUARIO
app.post('/createUserType', createUserType)
//METODO PARA MOSTRAR UN TIPO DE USUARIO
app.get('/getUserType', getUserType)
//METODO PARA MOSTRAR UN SOLO TIPO DE USUARIO
app.get('/getOnlyUserType/:descripcion', getOnlyUserType)
//METODO PARA ELIMINAR UN TIPO DE USUARIO
app.delete('/deleteUserType/:id', deleteUserType);
//METODO PARA EDITAR UN USUARIO
app.put('/updateUserType/:id', updateUserType);
//-------------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR UNA CONFERENCIA
app.post('/createConferences', createConferences)
//METODO PARA MOSTRAR UNA CONFERENCIA
app.get('/getConferences', getConferences)
//METODO PARA MOSTRAR UNA SOLA CONFERENCIA
app.get('/getOnlyConferences/:nombre', getOnlyConferences)
//METODO PARA ELIMINAR UNA CONFERENCIA
app.delete('/deleteConferences/:id', deleteConferences);
//METODO PARA EDITARR UNA CONFERENCIA
app.put('/updateConferences/:id', updateConferences);
//--------------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR OTRO EVENTO
app.post('/createOtherEvent', createOtherEvent);
//METODO PARA MOSTRAR LOS OTROS EVENTOS
app.get('/getOtherEvent', getOtherEvent);;
//METODO PARA ELIMINAR OTRO EVENTO
app.delete('/deleteOtherEvent/:id', deleteOtherEvent);
//METODO PARA EDITAR LA MONDA DE LAS SEDES
app.put('/updateOtherEvent/:id', updateOtherEvent);
//--------------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR ROL PROYECTO
app.post('/createProject_Role', createProject_Role);
//METODO PARA MOSTRAR ROL PROYECTO
app.get('/getProject_Role', getProject_Role);
//METODO PARA MOSTRAR UN ROL PROYECTO
app.get('/getOnlyProject_Role/:descripcion', getOnlyProject_Role)
//METODO PARA ELIMINAR ROL PROYECTO
app.delete('/deleteProject_Role/:id', deleteProject_Role);
//METODO PARA EDITAR ROL PROYECTO
app.put('/updateProject_Role/:id', updateProject_Role);

app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
