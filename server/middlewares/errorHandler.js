export const errorHandler = (error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || 'Something went wrong on server';
	res.status(status).json({
		success: false,
		status,
		message,
		stack: process.env.NODE_ENV === 'production' ? null : error.stack,
	});
};
