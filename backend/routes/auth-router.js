const express = require("express")
const router = express.Router()
const authCtrl = require('../controllers/auth-controller')

// SIGN UP
// POST /auth/register
router.post("/register", authCtrl.register)

// SIGN IN
// POST /auth/login
router.post("/login", authCtrl.login)

router.get("/logout", require, authCtrl.logout)

module.exports = router