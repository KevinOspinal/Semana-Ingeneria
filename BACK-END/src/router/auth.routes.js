const {Router} = require('express');
const router = Router();
const { Register, Login, Logout, Profile, verityToken } = require('../Controllers/Auth/Auth.controllers.js')
const {authRequire} = require('../Middlewares/ValidateToken.js')

router.post('/register',Register)

router.post('/login',Login)

router.post('/logout', Logout)

router.get('/verify', verityToken)

router.get('/profile',authRequire,Profile)

module.exports = router;
