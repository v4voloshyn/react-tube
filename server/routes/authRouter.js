import express from 'express';
import { googleAuth, signIn, signUp } from '../controllers/authController.js';

export const authRouter = express.Router();

// CREATE A USER VIA EMAIL
authRouter.post('/signup', signUp);
// SIGN IN
authRouter.post('/signin', signIn);
// GOOGLE AUTH
authRouter.post('/google', googleAuth);
