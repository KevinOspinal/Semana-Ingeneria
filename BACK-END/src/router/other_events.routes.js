const Router = require('express')
const router = Router();
const { createOtherEvent, getOtherEvent, deleteOtherEvent, updateOtherEvent} = require('../Controllers/Other_Events/Other_Events_Controllers.js')

//METODO PARA CREAR OTRO EVENTO
router.post('/createOtherEvent', createOtherEvent);
//METODO PARA MOSTRAR LOS OTROS EVENTOS
router.get('/getOtherEvent', getOtherEvent);
//METODO PARA ELIMINAR OTRO EVENTO
router.delete('/deleteOtherEvent/:id', deleteOtherEvent);
//METODO PARA EDITAR un evento
router.put('/updateOtherEvent/:id', updateOtherEvent);

module.exports = router;
