const express = require('express')
const app = express()
const connection = require('./database/database')
const userController = require('./user/userController')
const userTknController = require('./userTkn/userTknController')

connection.authenticate().then(() => {
    console.log("CONN OK!")
}).catch((MsgErr) => {
    console.log(MsgErr)
})
app.use(express.json());
app.use('/', userController)
app.use('/', userTknController)

app.listen(8000, () => {
    console.log("Server ON!")
})
