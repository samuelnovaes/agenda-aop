const express = require('express')
const { sequelize } = require('./models/index')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', require('./router'))

sequelize.sync().then(() => {
	app.listen(3000, () => {
		console.log('Webservice rodando...')
	})
})