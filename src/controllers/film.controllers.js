const { films } = require('../database/db')
const { v4: uuid } = require('uuid')

//READ
const getFilms = (req, res) => {
	return res.json({
		ok: true,
		msg: 'Films Obtenidos',
		data: films,
	})
}

//CREATE
const createFilm = (req, res) => {
	const { title, year, price } = req.body
	const film = {
		id: uuid(),
		title,
		year,
		price,
	}

	films.push(film)
	return res.json({
		ok: true,
		msg: 'Film Agregado',
		data: film,
	})
}

//UPDATE
const updateFilm = (req, res) => {
	const { id } = req.params
	const { title, year, price } = req.body

	const film = films.find((film) => film.id === id)

	film.title = title
	film.year = year
	film.price = price

	return res.json({
		ok: true,
		msg: 'Film Actualizado',
		data: film,
	})
}

//DELETE
const deleteFilm = (req, res) => {
	const { id } = req.params

	const film = films.find((film) => film.id === id)

	films.splice(films.indexOf(film), 1)

	return res.json({
		ok: true,
		msg: 'Film Eliminado',
		data: film,
	})
}

module.exports = { getFilms, createFilm, updateFilm, deleteFilm }
