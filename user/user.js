const Sequelize = require('sequelize')
const connection = require('../database/database')
const UserTkn = require('../userTkn/userTkn')

const User = connection.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.belongsTo(UserTkn)
UserTkn.belongsTo(User)

//User.sync({ force: true })

module.exports = User