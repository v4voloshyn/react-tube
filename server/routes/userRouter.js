import express from 'express';
import {
	deleteUser,
	dislike,
	getUser,
	like,
	subscribeUser,
	unsubscribeUser,
	updateUser,
} from '../controllers/userController.js';
import { verifyUserToken } from '../middlewares/authMiddleware.js';

export const userRouter = express.Router();

// GET USER
userRouter.get('/find/:id', getUser);
// UPDATE USER
userRouter.put('/:id', verifyUserToken, updateUser);
// DELETE USER
userRouter.delete('/:id', verifyUserToken, deleteUser);
// SUBSCRIBE ON USER
userRouter.put('/sub/:id', verifyUserToken, subscribeUser);
// UNSUBSCRIBE ON USER
userRouter.put('/unsub/:id', verifyUserToken, unsubscribeUser);
// LIKE VIDEO
userRouter.put('/like/:videoId', verifyUserToken, like);
// DISLIKE VIDEO
userRouter.put('/dislike/:videoId', verifyUserToken, dislike);
