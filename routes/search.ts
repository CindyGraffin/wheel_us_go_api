import express from 'express'
import { getUsersBySearch } from '../controllers/search';

const searchRouter = express.Router()

// get USERS BY SEARCH
searchRouter.get('/', getUsersBySearch) 





export {searchRouter};