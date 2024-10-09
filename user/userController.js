const express = require('express')
const router = express.Router()
const User = require('./user')

router.post('/user', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var password = req.body.password

    User.create({
        name: name,
        email: email,
        password: password
    }).then(() => {
        res.sendStatus(200)
    })
})

module.exports = router