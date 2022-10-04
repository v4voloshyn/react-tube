import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SCLink = styled(Link)`
	display: flex;
	gap: 6px;
	align-items: center;
	font-family: inherit;
	text-decoration: none;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
	&:visited {
		color: ${({ theme }) => theme.textColor};
	}
`;

export const Logo = styled.div`
	position: relative;
	padding-left: 40px;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 500;
	font-size: 1.4rem;
	white-space: nowrap;
`;

export const SCButton = styled.button`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
	gap: 3px;
	font-weight: 500;
	font-size: 0.85rem;
	white-space: nowrap;
	cursor: pointer;
	color: ${({ theme }) => theme.textColor};
	background-color: ${({ theme }) => theme.bgLighterColor};
	border: 1px solid ${({ theme }) => theme.bgLighterColor};
	transition: box-shadow 0.2s ease-in-out;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadow};
	}
`;

export const LinkBtn = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	font-weight: 500;
	border-radius: 3px;
	cursor: pointer;
	gap: 8px;
	font-weight: 500;
	text-decoration: none;
`;

export const Hr = styled.hr`
	margin: 15px 0;
	width: 100%;
	border: 0.5px solid;
	border-color: ${({ theme }) => theme.hrColor};
	border-radius: 15px;
`;

export const ChannelImg = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #999;
	object-fit: fill;
	flex: 0 0 auto;
`;
