const {Router} = require('express')
const router = Router();
const {Register,Login,Logout} = require('../Controllers/Auth/Auth.controllers.js')


router.post('/register',Register)
router.post('/login',Login)
router.post('/logout',Logout)
router.get('/profile',)

module.exports = router;
