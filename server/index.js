import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5432;

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${connection.connection.host}`);
	} catch (error) {
		console.log(`Error : ${error.message}`);
		process.exit(1);
	}
};

app.listen(PORT, connectDB(), () => console.log(`Server is running on ${PORT} PORT`));
