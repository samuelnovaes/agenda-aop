const router = require('express').Router()
const Contact = require('../controllers/contact')
const auth = require('../middlewares/auth')
const aspectjs = require('aspectjs')
const contactAspect = require('../apects/contact')

//Adicionar contato
router.post('/', auth, async (req, res) => {
	try {
		const contact = new Contact(req.userId)
		contact.name = req.body.name
		contact.phone = req.body.phone
		await contact.save()
		res.send()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Listar contatos
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.list(req.userId)
		res.json(contacts)
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Deletar contato
router.delete('/:id', auth, async (req, res) => {
	try {
		const contact = new Contact(req.userId)
		await contact.load(req.params.id)

		const adviser = contactAspect(req.userId)
		aspectjs.before(contact, 'delete').add(adviser.beforeDelete)

		await contact.delete()
		res.end()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Atualizar contato
router.put('/:id', auth, async (req, res) => {
	try {
		const contact = new Contact(req.userId)
		await contact.load(req.params.id)
		
		if (req.body.name) contact.name = req.body.name
		if (req.body.phone) contact.phone = req.body.phone

		const adviser = contactAspect(req.userId)
		aspectjs.before(contact, 'save').add(adviser.beforeUpdate)

		await contact.save()
		res.end()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

module.exports = router