import styled from 'styled-components';

export const Container = styled.div`
	position: sticky;
	top: 0;
	flex: 1;
	background-color: #27344e;
	height: 100vh;
	color: #fff;
	font-size: 16px;
`;

export const Wrapper = styled.div`
	padding: 18px 25px;
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

export const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	cursor: pointer;
	padding: 7.5px 0;
`;

export const Login = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	font-weight: 500;
	margin-top: 10px;
	border-radius: 3px;
	cursor: pointer;
	gap: 8px;
	font-weight: 500;
`;

export const Hr = styled.hr`
	margin: 15px 0;
	border: 0.5px solid #364564;
	border-radius: 15px;
`;
