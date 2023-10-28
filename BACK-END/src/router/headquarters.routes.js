const Router = require('express')
const router = Router();
const { createHeadquarters, getHeadquarters,DeleteHeadquarters,updateHeadquarters,getOnlyHeadquerters} = require('../Controllers/Headquarters/Headquartes.controllers.js')

//METODO PARA CREAR UNA SEDE CARES MONDA
router.post('/createHeadquarters', createHeadquarters)
//METODO PARA MOSTRAR UNA SEDE CARES ALEXIS NANDO CAMILO
router.get('/getHeadquarters', getHeadquarters)
//METODO PARA MOSTRAR UNA SOLA SEDE CARES ALEXIS NANDO CAMILO
router.get('/getOnlyHeadquarters/:nombre', getOnlyHeadquerters)
//METODO PARA ELIMINAR Y VALER MONDA
router.delete('/deleteHeadquarters/:id', DeleteHeadquarters);
//METODO PARA EDITAR LA MONDA DE LAS SEDES
router.put('/updateHeadquarters/:id', updateHeadquarters);


module.exports = router;
