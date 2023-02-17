const express = require('express')
const app = express()

require('dotenv').config()

//MIDDLEWARES

app.use(express.json())

//RUTAS
app.use('/api/users', require('./routes/user.routes'))
app.use('/api/films', require('./routes/film.routes'))

//SERVER
app.listen(process.env.PORT, () => {
	console.log(`servidor corriendo en puerto: ${process.env.PORT}`)
})
