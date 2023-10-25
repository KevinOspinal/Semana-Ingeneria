const Router = require('express')
const router = Router();
const {getProject_Type, createProject_Type,getOnlyProject_Type,deleteProject_Type,updateProject_Type} = require('../Controllers/Project_Type/Project_Type.controller.js')

//METODO PARA CREAR  Project_Type
router.post('/createProject_Type',createProject_Type);

//METODO PARA MOSTRAR Project_Type
router.get('/getProject_Type', getProject_Type);

//METODO PARA MOSTRAR UN Project_Type
router.get('/getOnlyProject_Type/:descripcion', getOnlyProject_Type)

//METODO PARA ELIMINAR Project_Type
router.delete('/deleteProject_Type/:id', deleteProject_Type);

//METODO PARA EDITAR Project_Type
router.put('/updateProject_Type/:id', updateProject_Type);

module.exports = router;
