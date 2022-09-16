// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: 'uatube-mern.firebaseapp.com',
	projectId: 'uatube-mern',
	storageBucket: 'uatube-mern.appspot.com',
	messagingSenderId: '503516837083',
	appId: '1:503516837083:web:a41499f76e2ed295c2c8fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
