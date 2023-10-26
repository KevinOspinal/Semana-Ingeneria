const Router = require('express')
const router = Router()
const {authRequire} = require('../Middlewares/ValidateToken.js')


router.get('/homeUsers',(req,res) =>{
    res.send('INGRESA A LA PAGINA VALEMOS MONDA')
})


module.exports = router;