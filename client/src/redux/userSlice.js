import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
	user: null,
	isLoading: false,
	error: false,
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState: defaultState,
	reducers: {},
});

export default userSlice.reducer;
