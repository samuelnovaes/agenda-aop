const UserModel = require('../models/user')
const hash = require('../utils/hash')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const jwtSign = promisify(jwt.sign)
const { SECRET } = require('../config')

class User {
	static async register(username, password) {
		const user = new UserModel({
			username,
			password: hash(password)
		})
		await user.save()
	}

	static async login(username, password) {
		const user = await UserModel.findOne({
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