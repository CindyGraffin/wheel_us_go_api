import express from 'express'
import { createUser, getAllUsers, getUserById } from '../controllers/users';
import { verifyToken } from '../utils';
const usersRouter = express.Router()

// POST USER
usersRouter.post('/', createUser)

// GET ALL USERS
usersRouter.get('/', verifyToken, getAllUsers)

// GET ONE USER
usersRouter.get('/:id', getUserById)

export {usersRouter};