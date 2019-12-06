const Contact = require('../models/contact')

module.exports = userId => {
	return {
		beforeDelete() {
			if (this.userId != userId) {
				throw new Error('Você não tem permissão para deletar esse contato')
			}
		},
		beforeUpdate() {
			if (this.userId != userId) {
				throw new Error('Você não tem permissão para atualizar esse contato')
			}
		}
	}
}