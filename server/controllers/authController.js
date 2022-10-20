import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../helpers/error.js';
import jwt from 'jsonwebtoken';

// @desc  Register new user
// @route POST '/api/v1/auth/signup'
// @acces Public
export const signUp = async (req, res, next) => {
	try {
		const reqData = req.body;
		if(!reqData.name || !reqData.email|| !reqData.password) {
			return next(createError(400, 'All Sign Up fields a required to fill'));
		}
		// Check if user exist
		const isUserExist = await User.findOne({email: reqData.email})
		if(isUserExist) {
			next(createError(400, 'This user email is already exist'));
		}

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(reqData.password, salt);
		const newUser = new User({
			...reqData,
			password: hashedPassword,
		});

		const savedUser = await newUser.save();
		const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

		res.cookie('access_token', token, { httpOnly: true });
		const {password, ...userData} = savedUser._doc
		res.status(201).json(userData);
	} catch (error) {
		next(error);
	}
};

// @desc  Authenticate a user
// @route POST '/api/v1/auth/signin'
// @acces Public
export const signIn = async (req, res, next) => {
	const reqData = req.body;
		if(!reqData.name || !reqData.password) {
			return next(createError(400, 'All Sign In fields a required to fill'));
		}
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

		res.cookie('access_token', token, { httpOnly: true });
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

// @desc  SignUp or SignIn through Google account
// @route POST '/api/v1/auth/google'
// @acces Public
export const googleAuth = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (user) {
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

			res.cookie('access_token', token, { httpOnly: true });
			res.status(200).json(user._doc);
		} else {
			const newUser = new User({
				...req.body,
				fromGoogle: true,
			});
			const savedUser = await newUser.save();
			const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

			res.cookie('access_token', token, { httpOnly: true });
			res.status(201).json(savedUser._doc);
		}
	} catch (error) {
		next(error);
	}
};

// @desc    Logout controller to clear cookie and token
// @route   GET '/api/v1/auth/logout'
// @access  Private
export const cleanCookiesAndLogout = async (req, res, next) => {
	try {
		// Set token to none and expire after 5 seconds
		res.cookie('access_token', 'none', {
			expires: new Date(Date.now()),
			httpOnly: true,
		});
		res.status(200).json({ success: true, message: 'User logged out successfully' });
	} catch (error) {
		next(error);
	}
};
