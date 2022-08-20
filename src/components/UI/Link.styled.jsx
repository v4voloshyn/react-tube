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
