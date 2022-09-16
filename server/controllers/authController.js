import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../helpers/error.js';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
	try {
		const data = req.body;
		const salt = bcrypt.genSaltSync(10);
		const hashedPw = bcrypt.hashSync(data.password, salt);
		const newUser = new User({
			...data,
			password: hashedPw,
		});

		await newUser.save();

		res.status(201).json('User has been created');
	} catch (error) {
		next(error);
	}
};

export const signIn = async (req, res, next) => {
	try {
		const user = await User.findOne({ name: req.body.name });

		if (!user) {
			return next(createError(404, 'User Not Found'));
		}

		const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

		if (!isPasswordCorrect) {
			return next(createError(400, 'Login or password is not correct'));
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

		const { password, ...data } = user._doc;

		res.cookie('access_token', token, { httpOnly: true }).status(200).json(data);
	} catch (error) {
		next(error);
	}
};

export const googleAuth = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (user) {
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

			res.cookie('access_token', token, { httpOnly: true }).status(200).json(user._doc);
		} else {
			const newUser = new User({
				...req.body,
				fromGoogle: true,
			});
			const savedUser = await newUser.save();
			const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

			res.cookie('access_token', token, { httpOnly: true }).status(201).json(savedUser._doc);
		}
	} catch (error) {
		next(error);
	}
};
