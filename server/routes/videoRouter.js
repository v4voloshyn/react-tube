import express from 'express';
import {
	addVideo,
	addViewCounter,
	deleteVideo,
	getVideo,
	getVideoByTag,
	hotVideo,
	mySubVideo,
	randomVideo,
	searchVideo,
	updateVideo,
} from '../controllers/videoController.js';
import { verifyUserToken } from '../middlewares/authMiddleware.js';

export const videoRouter = express.Router();

videoRouter.post('/', verifyUserToken, addVideo);
videoRouter.put('/:id', verifyUserToken, updateVideo);
videoRouter.delete('/:id', verifyUserToken, deleteVideo);
videoRouter.put('/watch/:id', verifyUserToken, addViewCounter);
videoRouter.get('/subscriptions', verifyUserToken, mySubVideo);
videoRouter.get('/find/:id', getVideo);
videoRouter.get('/hot', hotVideo);
videoRouter.get('/random', randomVideo);
videoRouter.get('/tags', getVideoByTag);
videoRouter.get('/search', searchVideo);
