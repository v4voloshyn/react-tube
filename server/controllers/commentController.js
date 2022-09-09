import { createError } from '../helpers/error.js';
import VideoModel from '../models/Video.js';
import CommentModel from '../models/Comment.js';

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

export const addComment = async (req, res, next) => {
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

export const deleteComment = async (req, res, next) => {
	try {
		const comment = await CommentModel.findById(req.params.id);
		const video = await VideoModel.findById(comment.videoId);

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
