import express from 'express';
import { signup } from '../controllers/authController.js';

export const authRouter = express.Router();

// CREATE A USER VIA EMAIL
authRouter.post('/signup', signup);
// SIGN IN
authRouter.post('/signin');
// GOOGLE AUTH
authRouter.post('/g-auth');
