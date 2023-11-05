const Router = require('express')
const router = Router();
const { createUserConferences, getUserConferences, getOnlyUserConferences, deleteUserConferences, updateUserConferences, getOnlyUserConferencesAsis, updateUserConferencesAsis } = require('../Controllers/User_Conferences/User_Conferences.controllers.js')


//METODO PARA CREAR PROYECTOS
router.post('/createUserConferences', createUserConferences)
//METODO PARA MOSTRAR TODOS LOS USUARIOS POR CONFERENCIA
router.get('/getUserConferences', getUserConferences);
//METODO PARA MOSTRAR UN SOLO USUAIRO POR CONFERENCIA 
router.get('/getOnlyUserConferences/:documento', getOnlyUserConferences)
//METODO PARA ELIMINAR USUARIO POR CONFERENCIA
router.delete('/deleteUserConferences/:id', deleteUserConferences);
//METODO PARA EDITAR EL ESTADO DE USUARIO POR CONFERENCIA
router.put('/updateUserConferences/:id', updateUserConferences);

//ASISTENTE
//METODO PARA MOSTRAR UN SOLO USUAIRO POR CONFERENCIA 
router.get('/getOnlyUserConferencesAsis/:id_conferencia', getOnlyUserConferencesAsis)
//METODO PARA EDITAR EL ESTADO DE USUARIO POR CONFERENCIA
router.put('/updateUserConferencesAsis/:id', updateUserConferencesAsis);

module.exports = router;
