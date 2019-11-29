const express = require('express')

const app = express()
app.use('/api', require('./router'))

app.listen(3000, () => {
	console.log('Webservice rodando...')
})