const express = require('express')
const app = express();
const cors = require('cors')
const { createHeadquarters, getHeadquarters,DeleteHeadquarters,updateHeadquarters,getOnlyHeadquerters} = require('./Controllers/Headquarters/Headquartes.controllers.js')
const { createProject_Role, getProject_Role,DeleteProject_Role,updateProject_Role,getOnlyProject_Role} = require('./Controllers/Headquarters/Project_Role.controllers.js')
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



app.post('/createProject_Role', createProject_Role)

app.get('/getProject_Role', getProject_Role)

app.get('/getOnlyProject_Role/:nombre', getOnlyProject_Role)

app.delete('deleteProject_Role/:id_rol_proyecto', DeleteProject_Role);

app.put('/updateProject_Role/:id', updateProject_Role);

app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
