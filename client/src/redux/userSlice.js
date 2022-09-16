import { createSlice } from '@reduxjs/toolkit';

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
			state = defaultState;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
