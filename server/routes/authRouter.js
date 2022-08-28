import express from 'express';
import { signIn, signUp } from '../controllers/authController.js';

export const authRouter = express.Router();

// CREATE A USER VIA EMAIL
authRouter.post('/signup', signUp);
// SIGN IN
authRouter.post('/signin', signIn);
// GOOGLE AUTH
authRouter.post('/g-auth');
