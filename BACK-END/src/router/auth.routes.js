const {Router} = require('express')
const router = Router();
const {Register,Login} = require('../Controllers/Auth/Auth.controllers.js')


router.post('/register',Register)
router.post('/login',Login)

module.exports = router;
