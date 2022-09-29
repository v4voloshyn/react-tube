import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #00000080;
	z-index: 1;
`;
export const Wrapper = styled.div`
	margin: 10px 15px;
	max-height: 100vh;
	width: 100vw;
	max-width: 600px;
	position: relative;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: ${({ theme }) => theme.bgLighterColor};
	color: ${({ theme }) => theme.textColor};
	z-index: 1;
`;
export const CloseBtn = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
`;
export const Title = styled.h1`
	text-align: center;
`;
export const Label = styled.label`
	font-size: 1.4rem;
`;

export const Input = styled.input`
	padding: 10px 20px;
	width: 100%;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.hrColor};
	border-radius: 3px;
	color: ${({ theme }) => theme.textColor};
	font-family: inherit;
	font-size: inherit;

	&[type='file'] {
		cursor: pointer;
	}
`;

export const InputArea = styled.textarea`
	padding: 10px 20px;
	width: 100%;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.hrColor};
	border-radius: 3px;
	color: ${({ theme }) => theme.textColor};
	font-family: inherit;
	resize: vertical;
	font-size: inherit;
`;

export const Button = styled.button`
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
