import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/userRouter.js';
import { commentRouter } from './routes/commentRouter.js';
import { videoRouter } from './routes/videoRouter.js';
import { authRouter } from './routes/authRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5432;

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${connection.connection.host}`);
	} catch (error) {
		console.log(`Connection error: ${error.message}`);
		process.exit(1);
	}
};

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/videos', videoRouter);

app.use(errorHandler);

app.listen(PORT, connectDB(), () => console.log(`Server is running on ${PORT} PORT`));
