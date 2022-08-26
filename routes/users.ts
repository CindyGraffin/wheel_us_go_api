import express from 'express'
import { getAllUsers, getUserById } from '../controllers/users';
import { verifyToken } from '../utils';

const usersRouter = express.Router()

// GET ALL USERS
usersRouter.get('/', verifyToken, getAllUsers)

// GET ONE USER
usersRouter.get('/:id', getUserById)



export {usersRouter};
