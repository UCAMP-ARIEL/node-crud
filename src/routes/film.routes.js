const { Router } = require('express')
const router = Router()
const { getFilms, createFilm, updateFilm, deleteFilm } = require('../controllers/film.controllers')

//READ
router.get('/', getFilms)

//CREATE
router.post('/', createFilm)

//UPDATE
router.put('/:id', updateFilm)

//DELETE
router.delete('/:id', deleteFilm)

module.exports = router
