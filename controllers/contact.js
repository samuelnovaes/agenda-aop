const ContactModel = require('../models/contact')

class Contact {
	constructor(userId) {
		this.contact = new ContactModel()
		this.contact.userId = userId
	}

	get userId() {
		return this.contact.userId
	}

	get id() {
		return this.contact.id
	}

	get phone() {
		return this.contact.phone
	}

	set phone(value) {
		this.contact.phone = value
	}

	get name() {
		return this.contact.name
	}

	set name(value) {
		this.contact.name = value
	}

	async save(){
		await this.contact.save()
	}

	async load(id) {
		this.contact = await ContactModel.findByPk(id)
	}

	async delete (){
		await this.contact.destroy()
	}

	static async list (userId){
		const contacts = await ContactModel.findAll({
			where: { userId }
		})
		return contacts
	}
}

module.exports = Contact