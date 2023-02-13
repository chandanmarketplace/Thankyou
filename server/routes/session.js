const express = require('express')
const { verifyToken } = require('../controller/sessionController')
const router = express.Router()


router.get('/verifyToken', verifyToken)

module.exports = router