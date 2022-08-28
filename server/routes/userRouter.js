import express from 'express';
import { testFN } from '../controllers/userController.js';

export const userRouter = express.Router();

userRouter.get('/test', testFN);
