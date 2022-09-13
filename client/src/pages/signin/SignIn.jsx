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

export const SignIn = () => {
	const [formData, setFormData] = useState({});

	const setData = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const { signin_username: name, signin_password: password } = formData;
		try {
			const response = await axios.post('/auth/signin', { name, password });
			console.log('response :>> ', response.data);
		} catch (error) {}
	};

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
