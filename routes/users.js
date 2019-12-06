const router = require('express').Router()
const User = require('../controllers/user')

//Cadastrar usuário
router.post('/', async (req, res) => {
	try {
		await User.register(req.body.username, req.body.password)
		res.end()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

//Login de usuário
router.post('/login', async (req, res) => {
	try {
		const token = await User.login(req.body.username, req.body.password)
		res.json({ token: `Bearer ${token}` })
	}
	catch (error) {
		res.status(500).send(error.message)
	}
})

module.exports = router