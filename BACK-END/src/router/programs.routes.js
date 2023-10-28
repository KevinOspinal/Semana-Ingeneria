const Router = require('express')
const router = Router();
const {createPrograms, getPrograms,getOnlyPrograms,deletePrograms,updatePrograms} = require('../Controllers/Programs/Programs_controllers.js')

// metodos programas
router.post('/createPrograms', createPrograms);
//METODO PARA MOSTRAR FACULTADES
router.get('/getPrograms', getPrograms);
//METODO PARA MOSTRAR UNA FACULTAD
router.get('/getOnlyPrograms/:nombre_programa', getOnlyPrograms)
//METODO PARA ELIMINAR FACULTADES
router.delete('/deletePrograms/:id', deletePrograms);
//METODO PARA EDITAR FACULTADES
router.put('/updatePrograms/:id', updatePrograms);

module.exports = router;
