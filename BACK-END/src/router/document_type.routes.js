const Router = require('express')
const router = Router();
const { createDocument_Type, getDocument_Type,getOnlyDocument_Type,deleteDocument_Type,updateDocument_Type} = require('../Controllers/Document_Type/Document_Type_Controllers.js')

//METODO PARA CREAR TIPO DOCUMENTO
router.post('/createDocument_Type', createDocument_Type);
//METODO PARA MOSTRAR TIPO DOCUMENTO
router.get('/getDocument_Type', getDocument_Type);
//METODO PARA MOSTRAR UN TIPO DOCUMENTO
router.get('/getOnlyDocument_Type/:descripcion', getOnlyDocument_Type)
//METODO PARA ELIMINAR TIPO DOCUMENTO
router.delete('/deleteDocument_Type/:id', deleteDocument_Type);
//METODO PARA EDITAR TIPO DOCUMENTO
router.put('/updateDocument_Type/:id', updateDocument_Type);

module.exports = router;
