const express = require('express')
const app = express()
const connection = require('./database/database')
const userController = require('./user/userController')

connection.authenticate().then(() => {
    console.log("CONN OK!")
}).catch((MsgErr) => {
    console.log(MsgErr)
})

app.use('/', userController)

app.listen(8000, () => {
    console.log("Server ON!")
})