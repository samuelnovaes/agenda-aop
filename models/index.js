const Sequelize = require('sequelize')

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'agenda.db'
})

exports.sequelize = sequelize
exports.Sequelize = Sequelize