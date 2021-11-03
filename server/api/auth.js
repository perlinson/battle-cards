const router = require('express').Router()
const authController = require('../service/auth')

router.post('/signin', authController.postSignin)
router.post('/login', authController.postLogin)
router.get('/user', authController.getUser)

module.exports = router
