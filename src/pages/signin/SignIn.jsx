import React from 'react';
import {
	SignInButton,
	SignInContainer,
	SignInInput,
	SignInSubtitle,
	SignInTitle,
	SignInWrapper,
} from './SignIn.styled';

import { Hr } from '../../components/UI';

export const SignIn = () => {
	return (
		<SignInContainer>
			<SignInWrapper>
				<SignInTitle>Sign in</SignInTitle>
				<SignInSubtitle>to continue to your channel</SignInSubtitle>
				<SignInInput placeholder='Username' />
				<SignInInput type='password' placeholder='Password' />
				<SignInButton>Sign in</SignInButton>
				<Hr style={{ margin: '3px' }} />
				<SignInTitle>or</SignInTitle>
				<Hr style={{ margin: '3px' }} />
				<SignInTitle>Sign Up</SignInTitle>
				<SignInInput placeholder='Username' />
				<SignInInput type='password' placeholder='Password' />
				<SignInInput type='password' placeholder='Repeat your password' />
				<SignInButton>Sign up</SignInButton>
			</SignInWrapper>
		</SignInContainer>
	);
};
