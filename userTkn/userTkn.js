const Sequelize = require('sequelize')
const connection = require('../database/database')

const UserTkn = connection.define('users_tkn', {
    tkn: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

UserTkn.sync({ force: true })

module.exports = UserTkn