const Router = require('express')
const router = Router();
const { createConferences, getConferences, getOnlyConferences, deleteConferences, updateConferences } = require('../Controllers/Conferences/Conferences.controllers.js')

//METODO PARA CREAR UNA CONFERENCIA
router.post('/createConferences', createConferences)
//METODO PARA MOSTRAR UNA CONFERENCIA
router.get('/getConferences', getConferences)
//METODO PARA MOSTRAR UNA SOLA CONFERENCIA
router.get('/getOnlyConferences/:nombre', getOnlyConferences)
//METODO PARA ELIMINAR UNA CONFERENCIA
router.delete('/deleteConferences/:id', deleteConferences);
//METODO PARA EDITARR UNA CONFERENCIA
router.put('/updateConferences/:id', updateConferences);

module.exports = router;
