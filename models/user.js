const { sequelize, Sequelize } = require('./index')

class User extends Sequelize.Model { }

User.init({
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [6]
		}
	}
}, { sequelize, modelName: 'user' })

module.exports = User