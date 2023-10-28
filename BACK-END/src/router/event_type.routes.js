const Router = require('express')
const router = Router();
const { createEvent_Type, getEvent_Type,getOnlyEvent_Type,deleteEvent_Type,updateEvent_Type} = require('../Controllers/Event_Type/Event_Type.controller.js')

//METODO PARA CREAR TIPO EVENTO
router.post('/createEvent_Type', createEvent_Type);
//METODO PARA MOSTRAR TIPO EVENTO
router.get('/getEvent_Type', getEvent_Type);
//METODO PARA MOSTRAR UN TIPO EVENTO
router.get('/getOnlyEvent_Type/:descripcion_otro_evento', getOnlyEvent_Type)
//METODO PARA ELIMINAR TIPO EVENTO
router.delete('/deleteEvent_Type/:id', deleteEvent_Type);
//METODO PARA EDITAR TIPO EVENTO
router.put('/updateEvent_Type/:id', updateEvent_Type);

module.exports = router;
