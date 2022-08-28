import User from '../models/User.js';
import bcrypt from 'bcryptjs';
export const signup = async (req, res, next) => {
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
