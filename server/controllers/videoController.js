import { createError } from '../helpers/error.js';
import VideoModel from '../models/Video.js';
import UserModel from '../models/User.js';

// @desc  Create video
// @route POST '/api/v1/videos/'
// @acces Private
export const addVideo = async (req, res, next) => {
	const newVideo = new VideoModel({ userId: req.user.id, ...req.body });

	try {
		const savedVideo = await newVideo.save();

		res.status(201).json(savedVideo);
	} catch (error) {
		next(error);
	}
};

// @desc  Get video by ID
// @route GET '/api/v1/videos/find/:id'
// @acces Public
export const getVideo = async (req, res, next) => {
	try {
		const video = await VideoModel.findById(req.params.id);

		if (!video) {
			return next(createError(404, 'Video is not found'));
		}

		res.status(200).json(video);
	} catch (error) {
		next(error);
	}
};

// @desc  Update video
// @route PUT '/api/v1/videos/:id'
// @acces Private
export const updateVideo = async (req, res, next) => {
	try {
		const video = await VideoModel.findById(req.params.id);

		if (!video) {
			return next(createError(404, 'Video to update not found'));
		}

		if (req.user.id === video.userId) {
			const updatedVideo = await VideoModel.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);
			res.status(200).json(updatedVideo);
		} else {
			return next(createError(403, 'You have no access to update video'));
		}
	} catch (error) {
		next(error);
	}
};

// @desc  Delete video by ID
// @route DELETE '/api/v1/videos/:id'
// @acces Private
export const deleteVideo = async (req, res, next) => {
	try {
		const video = await VideoModel.findById(req.params.id);

		if (!video) {
			return next(createError(404, 'Video to delete not found'));
		}

		if (req.user.id === video.userId) {
			await VideoModel.findByIdAndDelete(req.params.id);
			return res.status(200).json(`The video '${video.title}' has been deleted`);
		} else {
			return next(createError(403, 'You have no access to delete video'));
		}
	} catch (error) {
		next(error);
	}
};

// @desc  Increase view counter
// @route PUT '/api/v1/videos/watch/:id'
// @acces Private
export const addViewCounter = async (req, res, next) => {
	try {
		const video = await VideoModel.findByIdAndUpdate(req.params.id, {
			$inc: { views: 1 },
		});

		if (!video) {
			return next(createError(404, 'Video is not found'));
		}

		res.status(200).json('Increased view count');
	} catch (error) {
		next(error);
	}
};

// @desc  Get hot videos
// @route GET '/api/v1/videos/hot'
// @acces Public
export const hotVideo = async (req, res, next) => {
	try {
		const videos = await VideoModel.find().sort({ views: -1 });

		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};

// @desc  Get random 20 videos
// @route GET '/api/v1/videos/random'
// @acces Public
export const randomVideo = async (req, res, next) => {
	try {
		const videos = await VideoModel.aggregate([{ $sample: { size: 20 } }]);

		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};

// @desc  Get videos of user subscriptions
// @route GET '/api/v1/videos/subscriptions'
// @acces Private
export const mySubVideo = async (req, res, next) => {
	try {
		const currentUser = await UserModel.findById(req.user.id);
		const subscribedChannels = currentUser.subscribedUsers;

		const sibscribedVideos = await Promise.all(
			subscribedChannels.map((channelId) => {
				return VideoModel.find({ userId: channelId });
			})
		);

		res.status(200).json(sibscribedVideos.flat().sort((a, b) => b.createdAt - a.createdAt));
	} catch (error) {
		next(error);
	}
};

// @desc  Get videos by tags
// @route GET '/api/v1/videos/tags'
// @acces Public
export const getVideoByTag = async (req, res, next) => {
	try {
		const tags = req.query.tags.split(',');

		const videos = await VideoModel.find({
			tags: { $in: tags },
		}).limit(20);

		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};

// @desc  Search video by title or by tags
// @route GET '/api/v1/videos/search'
// @acces Public
export const searchVideo = async (req, res, next) => {
	const query = req.query.byTitle;

	try {
		const videosByQuery = await VideoModel.find({
			$or: [{ title: { $regex: query, $options: 'i' } }, { tags: { $in: [query] } }],
		}).limit(20);

		res.status(200).json(videosByQuery);
	} catch (error) {
		next(error);
	}
};
