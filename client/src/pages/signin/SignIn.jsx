import React, { useState } from 'react';
import {
	SignInButton,
	SignInContainer,
	SignInInput,
	SignInSubtitle,
	SignInTitle,
	SignInWrapper,
} from './SignIn.styled';

import { Hr } from '../../components/UI';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
			const response = await axios.post('/auth/signin', { name, password });

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

				axios
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
				<SignInInput type='password' placeholder='Repeat your password' />
				<SignInButton>Sign up</SignInButton>
			</SignInWrapper>
		</SignInContainer>
	);
};
