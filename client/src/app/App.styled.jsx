import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	min-height: 100vh;
	width: 100%;
`;

export const AppMain = styled.div`
	position: relative;
	flex: 7;
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	z-index: 5;
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		visibility: ${({ overlay }) => (overlay ? 'visible' : 'hidden')};
		background-color: rgba(40, 40, 40, 0.6);
		z-index: 10;
	}
`;

export const AppWrapper = styled.div`
	height: ${({ overlay }) => overlay && '100vh'};
	overflow: ${({ overlay }) => overlay && 'hidden'};
`;
