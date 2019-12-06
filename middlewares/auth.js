
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { SECRET } = require('../config')

module.exports = async (req, res, next) => {
	try {
		const authorization = req.get('authorization')
		if (!authorization) {
			throw new Error('Token obrigatório')
		}
		const token = authorization.replace(/^Bearer (.+)$/, '$1')
		const payload = await promisify(jwt.verify)(token, SECRET)
		req.userId = payload.id
		next()
	}
	catch (error) {
		res.status(500).send(error.message)
	}
}