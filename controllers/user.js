const User = require('../models/user')
const hash = require('../utils/hash')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const jwtSign = promisify(jwt.sign)
const { SECRET } = require('../config')

class User {
	static async (username, password) {
		const user = new User({
			username,
			password: hash(password)
		})
		await user.save()
	}

	static async (username, password) {
		const user = await User.findOne({
			where: {
				username,
				password: hash(password)
			}
		})
		if (user) {
			const token = await jwtSign({ id: user.id }, SECRET)
			return token
		}
		else {
			throw new Error('Invalid username or password')
		}
	}
}

module.exports = User