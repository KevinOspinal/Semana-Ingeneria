const Router = require('express')
const router = Router();
const { createOther_Events, getOther_Events , deleteOther_Events, updateOther_Events, getOnlyOther_Events} = require('../Controllers/Other_Events/Other_Events_Controllers.js')

//METODO PARA CREAR OTRO EVENTO
router.post('/createOther_Events', createOther_Events);
//METODO PARA MOSTRAR LOS OTROS EVENTOS
router.get('/getOther_Events', getOther_Events);
//METODO PARA MOSTRAR UN EVENTO
router.get('/getOnlyOther_Events/:nombre_evento', getOnlyOther_Events)
//METODO PARA ELIMINAR OTRO EVENTO
router.delete('/deleteOther_Events/:id', deleteOther_Events);
//METODO PARA EDITAR un evento
router.put('/updateOther_Events/:id', updateOther_Events);

module.exports = router;
