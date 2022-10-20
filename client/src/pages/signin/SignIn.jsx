import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '../../firebase';

import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { api } from '../../axios/instance';

import { Hr } from '../../components/UI';
import {
	SignInButton,
	SignInContainer,
	SignInInput,
	SignInSubtitle,
	SignInTitle,
	SignInWrapper,
} from './SignIn.styled';

export const SignIn = () => {
	const [formData, setFormData] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userData = useSelector((state) => state.user.data);

	const setData = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch(loginStart());
		const { signin_username: name, signin_password: password } = formData;
		try {
			const response = await api.post('/auth/signin', { name, password });

			dispatch(loginSuccess(response.data));
		} catch (error) {
			console.log('errorMessage', error);
			dispatch(loginFailure(error.response.data.message));
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		dispatch(loginStart());
		const {
			signup_username: name,
			signup_email: email,
			signup_password: password,
			repeat_password: repeatPassword,
		} = formData;
		if (password !== repeatPassword) {
			throw new Error(`Passwords do not match. Please try again`);
		}

		try {
			const response = await api.post('/auth/signup', { name, email, password });

			dispatch(loginSuccess(response.data));
		} catch (error) {
			console.log('errorMessage', error);
			dispatch(loginFailure(error.response.data.message));
		}
	};

	const googleSignIn = async () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				dispatch(loginStart());
				const user = result.user;

				api
					.post('/auth/google', {
						name: user.displayName,
						email: user.email,
						img: user.photoURL,
					})
					.then((resp) => {
						dispatch(loginSuccess(resp.data));
					});
			})
			.catch((error) => {
				dispatch(loginFailure(error));
			});
	};

	useEffect(() => {
		if (userData) {
			navigate('/');
		}
	}, [userData, navigate]);
	return (
		<SignInContainer>
			<SignInWrapper>
				<SignInTitle>Sign in</SignInTitle>
				<SignInSubtitle>to continue to your channel</SignInSubtitle>
				<SignInInput name='signin_username' placeholder='Username' onChange={setData} />
				<SignInInput
					name='signin_password'
					type='password'
					placeholder='Password'
					onChange={setData}
				/>
				<SignInButton onClick={handleLogin}>Sign in</SignInButton>
				<Hr style={{ margin: '3px' }} />
				<SignInTitle>or</SignInTitle>
				<SignInButton onClick={googleSignIn}>Sign in with Google</SignInButton>
				<SignInTitle>or</SignInTitle>
				<Hr style={{ margin: '3px' }} />
				<SignInTitle>Sign Up</SignInTitle>
				<SignInInput name='signup_username' placeholder='Username' onChange={setData} />
				<SignInInput name='signup_email' type='email' placeholder='Email' onChange={setData} />
				<SignInInput
					name='signup_password'
					type='password'
					placeholder='Your password'
					onChange={setData}
				/>
				<SignInInput
					type='password'
					placeholder='Repeat your password'
					name='repeat_password'
					onChange={setData}
				/>
				<SignInButton onClick={handleSignUp}>Sign up</SignInButton>
			</SignInWrapper>
		</SignInContainer>
	);
};
