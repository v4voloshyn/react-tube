import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SCLink = styled(Link)`
	font-family: inherit;
	text-decoration: none;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
	&:visited {
		color: ${({ theme }) => theme.textColor};
	}
`;

export const Hr = styled.hr`
	margin: 15px 0;
	border: 0.5px solid;
	border-color: ${({ theme }) => theme.hrColor};
	border-radius: 15px;
`;
