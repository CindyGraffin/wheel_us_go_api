import express from 'express'
import { createUser, getAllUsers } from '../controllers/users';
const usersRouter = express.Router()

// POST USER
usersRouter.post('/', createUser)

// GET ALL USERS
usersRouter.get('/', getAllUsers)

// GET ONE USER
// usersRouter.get('/:id', (req, res) => {
// })

export {usersRouter};