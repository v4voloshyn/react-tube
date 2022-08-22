import { Person, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import { LinkBtn } from '../UI';
import { NavContainer, NavInput, NavSearch, NavWrapper } from './Navbar.styled';

export const Navbar = () => {
	return (
		<NavContainer>
			<NavWrapper>
				<NavSearch>
					<NavInput placeholder='Search' />
					<SearchOutlined />
				</NavSearch>
				<LinkBtn to='signin'>
					<Person />
					SIGN IN
				</LinkBtn>
			</NavWrapper>
		</NavContainer>
	);
};
