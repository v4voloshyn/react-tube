import styled from 'styled-components';
import { LinkBtn, SCLink } from '../UI';

export const Item = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 15px;
	cursor: pointer;
	padding: 7.5px 0;
	transition: background-color, 0.3s ease;
	border-radius: 3px;
`;

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.bgLighterColor};
	min-width: 240px;
	max-width: 300px;
	color: ${({ theme }) => theme.textColor};
	height: 100vh;
	font-size: 16px;
	overflow-y: auto;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	z-index: 10;
`;

export const Wrapper = styled.div`
	padding: 15px 20px 20px 20px;
	& ${SCLink}:nth-child(3) {
		margin-top: 25px;
	}

	& > ${SCLink}:hover, & > ${SCLink}:focus {
		background-color: rgba(0, 0, 0, 0.1);
	}
	& > ${SCLink}:focus {
		outline: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 5px;
	}
`;

export const Title = styled.h2`
	font-size: 14px;
	font-weight: 500;
	color: #aaa;
	margin-bottom: 20px;
	text-transform: uppercase;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	font-size: 24px;
	white-space: nowrap;
`;

export const Img = styled.img`
	height: 25px;
`;

export const Login = styled.div`
	display: flex;
	flex-direction: column;

	& > ${LinkBtn} {
		margin-top: 15px;
	}
`;
