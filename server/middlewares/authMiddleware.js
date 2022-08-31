import jwt from 'jsonwebtoken';
import { createError } from '../helpers/error.js';

export const verifyUserToken = (req, res, next) => {
	const token = req.cookies.access_token;

	if (!token) {
		return next(createError(401, 'You are not authenticated!'));
	}

	jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
		if (error) {
			return next(createError(403, 'Something wrong with your token'));
		}
		req.user = user;
		next();
	});
};
