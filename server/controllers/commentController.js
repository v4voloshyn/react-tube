import { createError } from '../helpers/error.js';
import VideoModel from '../models/Video.js';
import CommentModel from '../models/Comment.js';

// @desc  Get comments by video ID
// @route GET '/api/v1/comments/:videoId'
// @acces Public
export const getComments = async (req, res, next) => {
	try {
		const allComments = await CommentModel.find({
			videoId: req.params.videoId,
		});

		res.status(200).json(allComments);
	} catch (error) {
		next(error);
	}
};

// @desc  Add comment to video
// @route POST '/api/v1/comments/'
// @acces Private
export const addComment = async (req, res, next) => {
	if(!req.body.text){
		return next(createError(400, 'Please, write any thoughts about this video'))
	}
	if(!req.body.videoId){
		return next(createError(400, 'Video ID is required'))
	}
	const newComment = new CommentModel({
		...req.body,
		userId: req.user.id,
	});

	try {
		const savedComment = await newComment.save();

		res.status(201).json(savedComment);
	} catch (error) {
		next(error);
	}
};

// @desc  Delete comment
// @route DELETE '/api/v1/comments/:id'
// @acces Private
export const deleteComment = async (req, res, next) => {
	try {
		const comment = await CommentModel.findById(req.params.id);
		const video = await VideoModel.findById(comment.videoId);

		if(!comment || !video){
			return next(createError(404, 'Comment or video not found'));
		}

		if (req.user.id === comment.userId || req.user.id === video.userId) {
			await CommentModel.findByIdAndDelete(req.params.id);
			res.status(200).send(`Comment was successfully deleted`);
		} else {
			return next(createError(403, 'You have no rights to delete this comment'));
		}
	} catch (error) {
		next(error);
	}
};
