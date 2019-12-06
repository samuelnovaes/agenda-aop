const router = require('express').Router()
const ContactController = require('../controllers/contact')
const auth = require('../middlewares/auth')

//Adicionar contato
router.post('/', auth, async (req, res) => {
	try {
		await ContactController.create(req.body.name, req.body.phone, req.userId)
		res.send()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Listar contatos
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await ContactController.list(req.userId)
		res.json(contacts)
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Deletar contato
router.delete('/:id', auth, async (req, res) => {
	try {
		await ContactController.delete(req.params.id)
		res.end()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Atualizar contato
router.put('/:id', auth, async (req, res) => {
	try {
		await ContactController.update(req.params.id, req.body.name, req.body.phone)
		res.end()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

module.exports = router