import express from 'express';
import { addComment, deleteComment, getComments, updateComment } from '../controllers/commentController.js';
import { verifyUserToken } from '../middlewares/authMiddleware.js';

export const commentRouter = express.Router();

commentRouter.get('/:videoId', getComments);
commentRouter.post('/', verifyUserToken, addComment);
commentRouter.put('/:commentID', verifyUserToken, updateComment);
commentRouter.delete('/:id', verifyUserToken, deleteComment);
