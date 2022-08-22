import styled from 'styled-components';

export const SignInContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 56px);
	color: ${({ theme }) => theme.textColor};
`;

export const SignInWrapper = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.bgLighterColor};
	box-shadow: ${({ theme }) => theme.shadow};
	padding: 20px 50px;
`;

export const SignInTitle = styled.h2`
	font-size: 1.5rem;
`;

export const SignInSubtitle = styled.span`
	font-size: 1.2rem;
	font-weight: 400;
`;

export const SignInInput = styled.input`
	padding: 10px 20px;
	width: 90%;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.hrColor};
	border-radius: 3px;
	color: ${({ theme }) => theme.textColor};
`;

export const SignInButton = styled.button`
	padding: 8px 25px;
	margin-top: 10px;
	background-color: transparent;
	color: ${({ theme }) => theme.textColor};
	font-size: 0.9rem;
	font-weight: 500;
	border: 3px solid ${({ theme }) => theme.hrColor};
	border-radius: 3px;
	transition: box-shadow, 0.3s ease-in-out;
	cursor: pointer;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadow};
	}
`;
