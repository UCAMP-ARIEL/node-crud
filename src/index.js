const express = require('express')
const app = express()
const port = 4000

//MIDDLEWARES
app.use(express.json())

//RUTAS
app.use('/api/users', require('./routes/user.routes'))

//SERVER
app.listen(port, () => {
	console.log(`servidor corriendo en puerto: ${port}`)
})
