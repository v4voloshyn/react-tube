import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
`;

export const AppMain = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
`;

export const AppWrapper = styled.div``;
