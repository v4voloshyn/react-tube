import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const defaultState = {
	data: null,
	isLoading: false,
	error: false,
	errorMessage: '',
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState: defaultState,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
			state.error = false;
			state.errorMessage = '';
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		loginFailure: (state, action) => {
			state.isLoading = false;
			state.error = true;
			state.errorMessage = action.payload;
		},
		logout: (state) => {
			state.data = null;
			storage.removeItem('persist:root');
		},
		subscribeOnChannel: (state, action) => {
			const channelID = action.payload;

			if (state.data.subscribedUsers.includes(channelID)) {
				state.data.subscribedUsers.splice(state.data.subscribedUsers.indexOf(channelID), 1);
			} else {
				state.data.subscribedUsers.push(channelID);
			}
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout, subscribeOnChannel } =
	userSlice.actions;

export default userSlice.reducer;
