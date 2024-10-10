const express = require('express')
const router = express.Router()
const User = require('./user')
const jwt = require('jsonwebtoken')

const jwtSecret = '832jksnhd3knm3ws99mli2'

router.post('/user', (req, res) => {
    var { name, email, password } = req.body

    User.findOne({
        where: { email: email }
    }).then(user => {
        if (user == undefined) {
            User.create({
                email: email,
                name: name,
                password: password
            }).then(() => {
                res.status(200)
                res.send("Usuário criado com sucesso!")
            })
        } else {
            res.status(400)
            res.send("E-mail já cadastrado no banco")
        }
    })
})

router.post('/auth', (req, res) => {
    var { email, password } = req.body

    User.findOne({
        where: {
            email: email,
            password: password
        }
    }).then(user => {
        if (user != undefined) {
            jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '3h' }, (err, tkn) => {
                if (err) {
                    res.status(400)
                    res.json({ err: 'Falhou' })
                } else {
                    res.status(200)
                    res.json({ tkn: tkn })
                }
            })
            //res.status(200)
            //res.send('Logado!')
        } else {
            res.status(400)
            res.send('Credenciais incorretas!')
        }
    })
})

module.exports = router