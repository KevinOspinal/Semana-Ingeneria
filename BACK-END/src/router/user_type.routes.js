const Router = require('express')
const router = Router();
const { createUserType, getUserType, getOnlyUserType, deleteUserType, updateUserType } = require('../Controllers/User_Type/User_Type.controllers.js')


//METODO PARA CREAR UN TIPO DE USUARIO
router.post('/createUserType', createUserType)
//METODO PARA MOSTRAR UN TIPO DE USUARIO
router.get('/getUserType', getUserType)
//METODO PARA MOSTRAR UN SOLO TIPO DE USUARIO
router.get('/getOnlyUserType/:descripcion', getOnlyUserType)
//METODO PARA ELIMINAR UN TIPO DE USUARIO
router.delete('/deleteUserType/:id', deleteUserType);
//METODO PARA EDITAR UN USUARIO
router.put('/updateUserType/:id', updateUserType);

module.exports = router;
