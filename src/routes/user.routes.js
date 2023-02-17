const { Router } = require('express')
const router = Router()
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controllers')

//READ
router.get('/', getUsers)

//CREATE
router.post('/', createUser)

//UPDATE
router.put('/:id', updateUser)

//DELETE
router.delete('/:id', deleteUser)

module.exports = router
