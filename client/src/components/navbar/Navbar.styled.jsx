import styled from 'styled-components';

export const NavContainer = styled.div`
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.bgLighterColor};
	height: 56px;
	z-index: 1;
`;

export const NavWrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
`;

export const NavSearch = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 40%;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

export const NavInput = styled.input`
	position: relative;
	width: 100%;
	height: 100%;
	border: none;
	background-color: transparent;
	outline: none;
	color: ${({ theme }) => theme.textColor};
`;

export const NavButton = styled.button`
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
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${({ theme }) => theme.textColor};
`;

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: #999;
`;
