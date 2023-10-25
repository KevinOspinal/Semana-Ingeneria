const Router = require('express')
const router = Router();
const { createProjects, getProjects, getOnlyProjects, deleteProjects, updateProjects } = require('../Controllers/Projects/Projects.controllers')

//------------------------------------------------------
//METODO PARA CREAR PROYECTOS
router.post('/createProjects', createProjects);
//METODO PARA MOSTRAR PROYECTOS
router.get('/getProjects', getProjects);
//METODO PARA MOSTRAR UN PROYECTO
router.get('/getOnlyProjects/:nombre', getOnlyProjects)
//METODO PARA ELIMINAR PROYECTO
router.delete('/deleteProjects/:id', deleteProjects);
//METODO PARA EDITAR PROYECTO
router.put('/updateProjects/:id', updateProjects);


module.exports = router;
