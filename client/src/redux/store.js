import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import videoReducer from './videoSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: ['video', 'user'],
};
const videoPersistConfig = {
	key: 'video',
	version: 1,
	storage,
	blacklist: ['errorMessage', 'error'],
};
const userPersistConfig = {
	key: 'user',
	version: 1,
	storage,
	blacklist: ['errorMessage', 'error'],
};

const rootReducer = combineReducers({
	user: persistReducer(userPersistConfig, userReducer),
	video: persistReducer(videoPersistConfig, videoReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
