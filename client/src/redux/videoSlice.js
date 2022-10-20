import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
	data: {},
	isLoading: false,
	error: false,
	errorMessage: '',
};

const videoSlice = createSlice({
	name: 'videoSlice',
	initialState: defaultState,
	reducers: {
		fetchVideoStart: (state) => {
			state.data = {};
			state.isLoading = true;
			state.error = false;
			state.errorMessage = '';
		},
		fetchVideoSuccess: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		fetchVideoFailure: (state, action) => {
			state.isLoading = false;
			state.error = true;
			state.errorMessage = action.payload;
		},
		likeVideo: (state, action) => {
			const userID = action.payload;

			if (state.data.dislikes.includes(userID)) {
				state.data.dislikes.splice(state.data.dislikes.indexOf(userID), 1);
			}

			if (state.data.likes.includes(userID)) {
				state.data.likes.splice(state.data.likes.indexOf(userID), 1);
			} else {
				state.data.likes.push(userID);
			}
		},
		dislikeVideo: (state, action) => {
			const userID = action.payload;

			if (state.data.likes.includes(userID)) {
				state.data.likes.splice(state.data.likes.indexOf(userID), 1);
			}

			if (state.data.dislikes.includes(userID)) {
				state.data.dislikes.splice(state.data.dislikes.indexOf(userID), 1);
			} else {
				state.data.dislikes.push(userID);
			}
		},
		cleanVideoError: (state) => {
			state.error = false;
			state.errorMessage = '';
		},
		setVideoError: (state, action) => {
			state.isLoading = false;
			state.error = true;
			state.errorMessage = action.payload;
		},
	},
});

export const {
	fetchVideoStart,
	fetchVideoSuccess,
	fetchVideoFailure,
	likeVideo,
	dislikeVideo,
	cleanVideoError,
	setVideoError,
} = videoSlice.actions;

export default videoSlice.reducer;
