import styled from 'styled-components';

export const NCContainer = styled.div``;

export const NCWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: 20px;
	margin: 20px 0px;
`;

export const NCInput = styled.input`
	width: 100%;
	border: none;
	color: ${({ theme }) => theme.textColor};
	border-bottom: 1px solid ${({ theme }) => theme.textSoftColor};
	background-color: transparent;
	padding: 5px;
	outline: none;
	&:hover,
	&:focus {
		border-bottom: 2px solid ${({ theme }) => theme.textSoftColor};
	}
`;
