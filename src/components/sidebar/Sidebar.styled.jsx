import styled from 'styled-components';
import { LinkBtn } from '../UI';

export const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	cursor: pointer;
	padding: 7.5px 0;
	transition: background-color, 0.3s ease;
	border-radius: 3px;
`;

export const Container = styled.div`
	position: sticky;
	top: 0;
	flex: 1;
	background-color: ${({ theme }) => theme.bgLighterColor};
	min-width: 220px;
	max-width: 300px;
	color: ${({ theme }) => theme.textColor};
	height: 100vh;
	font-size: 16px;
	overflow-y: auto;

	${Item} {
		&:hover,
		&:focus {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
`;

export const Wrapper = styled.div`
	padding: 18px 25px;
`;

export const Title = styled.h2`
	font-size: 14px;
	font-weight: 500;
	color: #aaa;
	margin-bottom: 20px;
	text-transform: uppercase;
`;

export const Logo = styled.div`
	margin-bottom: 20px;
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
		margin-top: 10px;
	}
`;
