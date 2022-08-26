import express from 'express'
import { getAllUsers, getUserById, getUsersBySearch } from '../controllers/users';
import { verifyToken } from '../utils';

const usersRouter = express.Router()

// get USERS BY SEARCH
usersRouter.get('/search,', getUsersBySearch) 

// GET ALL USERS
usersRouter.get('/', verifyToken, getAllUsers)

// GET ONE USER
usersRouter.get('/:id', getUserById)



export {usersRouter};