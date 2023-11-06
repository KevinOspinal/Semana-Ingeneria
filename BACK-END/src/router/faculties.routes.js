const Router = require('express')
const router = Router();
const {createFaculties, getFaculties,getOnlyFaculties,DeleteFaculties,updateFaculties} = require('../Controllers/Faculties/Faculties-controllers.js')

//METODO PARA CREAR FACULTADES
router.post('/createFaculties', createFaculties);
//METODO PARA MOSTRAR FACULTADES
router.get('/getFaculties', getFaculties);
//METODO PARA MOSTRAR UNA FACULTAD
router.get('/getOnlyFaculties/:nombre', getOnlyFaculties)
//METODO PARA ELIMINAR FACULTADES
router.delete('/deleteFaculties/:id', DeleteFaculties);
//METODO PARA EDITAR FACULTADES
router.put('/updateFaculties/:id', updateFaculties);

module.exports = router;
