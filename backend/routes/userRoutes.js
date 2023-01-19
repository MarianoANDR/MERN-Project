import express from 'express';
import {registratedUser, logUser, gotMe } from '../controllers/userController.js'; 

const router = express.Router();

router.post('/', registratedUser) 
router.post('/login', logUser)
router.get('/me', gotMe)
 

export {router as userRouter}
