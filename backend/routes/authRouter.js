const express=require('express')
const { register,login, getAuthUser } = require('../controllers/authController')
const { loginRules, validator, registerRules } = require('../middleware/bodyValidator')
const isAuth = require('../middleware/isAuth')
const router=express.Router()

router.post('/register',registerRules(),validator,register)
router.post('/login',loginRules(),validator,login)
router.get('/current_user',isAuth,getAuthUser)

module.exports=router