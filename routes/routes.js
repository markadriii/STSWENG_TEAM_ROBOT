const express = require('express')

const loginController = require('../controllers/login-controller');

const router = express.Router()

router.get('/', (req, res) => {
    res.render('test')
})

module.exports = router