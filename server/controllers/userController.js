import { createError } from '../helpers/error.js';
import UserModel from '../models/User.js';
import VideoModel from '../models/Video.js';

export const updateUser = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			const updatedUser = await UserModel.findByIdAndUpdate(
				req.user.id,
				{
					$set: req.body,
				},
				{
					new: true,
				}
			);

			res.status(200).json(updatedUser);
		} catch (error) {}
	} else {
		return next(createError(403, 'You can not update this account'));
	}
};

export const deleteUser = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			const deletedUser = await UserModel.findByIdAndDelete(req.user.id);
			if (!deletedUser) {
				return next(createError(404, 'User not found'));
			}
			res.status(200).json(`User ${deletedUser.name} has been deleted`);
		} catch (error) {}
	} else {
		return next(createError(403, 'You can not delete on this account'));
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await UserModel.findById(req.params.id).select('-password');
		if (!user) {
			return next(createError(404, 'User not found'));
		}
		return res.status(200).json(user);
	} catch (error) {
		return next(createError(500, 'Something went wrong trying to get user'));
	}
};

// TODO: fix subscribe to myself
// TODO: fix subscribe more then one. Hint: use like/dislike principle below
export const subscribeUser = async (req, res, next) => {
	try {
		await UserModel.findByIdAndUpdate(req.user.id, {
			$push: { subscribedUsers: req.params.id },
		});

		await UserModel.findByIdAndUpdate(req.params.id, {
			$inc: { subscribers: 1 },
		});

		res.status(200).json('Successfull subscribe');
	} catch (error) {
		return next(createError(500, 'Something went wrong on subscribe'));
	}
};

export const unsubscribeUser = async (req, res, next) => {
	try {
		await UserModel.findByIdAndUpdate(req.user.id, {
			$pull: { subscribedUsers: req.params.id },
		});

		await UserModel.findByIdAndUpdate(req.params.id, {
			$inc: { subscribers: -1 },
		});

		res.status(200).json('Successfull UNsubscribe');
	} catch (error) {
		return next(createError(500, 'Something went wrong on unsubscribe'));
	}
};

export const like = async (req, res, next) => {
	const userId = req.user.id;
	const videoId = req.params.videoId;

	try {
		const currentVideo = await VideoModel.findById(videoId);

		if (currentVideo.likes.includes(userId)) {
			await VideoModel.findByIdAndUpdate(videoId, {
				$pull: { likes: userId },
			});
			res.status(200).send('You REMOVE like from this video!');
		} else {
			await VideoModel.findByIdAndUpdate(videoId, {
				$addToSet: { likes: userId },
				$pull: { dislikes: userId },
			});
			res.status(200).send('You liked this video!');
		}
	} catch (error) {
		return next(createError(500, 'Error on like video'));
	}
};

export const dislike = async (req, res, next) => {
	const userId = req.user.id;
	const videoId = req.params.videoId;

	try {
		const currentVideo = await VideoModel.findById(videoId);

		if (currentVideo.dislikes.includes(userId)) {
			await VideoModel.findByIdAndUpdate(videoId, {
				$pull: { dislikes: userId },
			});

			res.status(200).send('You REMOVE dislike from this video!');
		} else {
			await VideoModel.findByIdAndUpdate(videoId, {
				$addToSet: { dislikes: userId },
				$pull: { likes: userId },
			});

			res.status(200).send('You disliked this video!');
		}
	} catch (error) {
		return next(createError(500, 'Error on dislike video'));
	}
};
