import express from 'express'
import { getAllUsers, getUserById, getUserFriends } from '../controllers/users';
import { verifyToken } from '../utils';

const usersRouter = express.Router()


// GET ALL USERS
usersRouter.get('/', verifyToken, getAllUsers)

// GET ONE USER
usersRouter.get('/:id', getUserById)

// 
usersRouter.get('/:id/friends', getUserFriends )

export {usersRouter};
