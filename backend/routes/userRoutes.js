import express from 'express';
import {registratedUser, logUser, gotMe } from '../controllers/userController.js'; 
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registratedUser) 
router.post('/login', logUser)
router.get('/me', protect, gotMe) 
 

export {router as userRouter}
