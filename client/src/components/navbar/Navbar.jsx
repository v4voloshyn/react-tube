import { Person, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import { LinkBtn, Logo, SCLink } from '../UI';
import { NavContainer, NavInput, NavSearch, NavWrapper } from './Navbar.styled';
import LogoImg from '../../assets/logo.webp';

export const Navbar = ({ children }) => {
	return (
		<NavContainer>
			{children}
			<NavWrapper>
				<Logo>
					<SCLink to='/'>
						<img src={LogoImg} alt='logo' style={{ height: '25px' }} /> UATube
					</SCLink>
				</Logo>
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
