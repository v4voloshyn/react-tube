import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	min-height: 100vh;
`;

export const AppMain = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
`;

export const AppWrapper = styled.div``;
