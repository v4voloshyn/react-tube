import { Person, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import { NavButton, NavContainer, NavInput, NavSearch, NavWrapper } from './Navbar.styled';

export const Navbar = () => {
	return (
		<NavContainer>
			<NavWrapper>
				<NavSearch>
					<NavInput placeholder='Search' />
					<SearchOutlined />
				</NavSearch>
				<NavButton>
					<Person />
					SIGN IN
				</NavButton>
			</NavWrapper>
		</NavContainer>
	);
};
