const Router = require('express')
const router = Router();
const { createProject_Role, getProject_Role, deleteProject_Role, updateProject_Role, getOnlyProject_Role } = require('../Controllers/Project_Role/Project.controller')

//METODO PARA CREAR ROL PROYECTO
router.post('/createProject_Role', createProject_Role);
//METODO PARA MOSTRAR ROL PROYECTO
router.get('/getProject_Role', getProject_Role);
//METODO PARA MOSTRAR UN ROL PROYECTO
router.get('/getOnlyProject_Role/:descripcion_rol_proyecto', getOnlyProject_Role)
//METODO PARA ELIMINAR ROL PROYECTO
router.delete('/deleteProject_Role/:id', deleteProject_Role);
//METODO PARA EDITAR ROL PROYECTO
router.put('/updateProject_Role/:id', updateProject_Role);


module.exports = router;
