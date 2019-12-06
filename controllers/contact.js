const Contact = require('../models/contact')

exports.create = async (name, phone) => {
	const contact = new Contact({ name, phone })
	await contact.save()
}

exports.update = async (id, name, phone) => {
	const contact = await Contact.findByPk(id)
	contact.name = name
	contact.phone = phone
	await contact.save()
}

exports.delete = async (id) => {
	const contact = await Contact.findByPk(id)
	await contact.destroy()
}

exports.list = async (userId) => {
	const contacts = await Contact.findAll({
		where: { userId }
	})
	return contacts
}