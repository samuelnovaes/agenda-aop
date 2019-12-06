const { sequelize, Sequelize } = require('./index')
const User = require('./user')

class Contact extends Sequelize.Model { }

Contact.init({
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, { sequelize, modelName: 'contact' })

Contact.belongsTo(User, {
	foreignKey: {
		allowNull: false
	},
	onDelete: 'CASCADE'
})

module.exports = Contact