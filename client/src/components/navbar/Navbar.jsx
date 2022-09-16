import { Person, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';
import React from 'react';
import { LinkBtn, Logo, SCLink } from '../UI';
import { Avatar, NavContainer, NavInput, NavSearch, NavWrapper, User } from './Navbar.styled';
import LogoImg from '../../assets/logo.webp';
import { useSelector } from 'react-redux';

export const Navbar = ({ children }) => {
	const userData = useSelector((state) => state.user.data);

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
				{userData ? (
					<User>
						<VideoCallOutlined style={{ cursor: 'pointer' }} />
						{userData.img ? <Avatar src={userData.img} /> : <Avatar />}
						{userData.name}
					</User>
				) : (
					<LinkBtn to='signin'>
						<Person />
						SIGN IN
					</LinkBtn>
				)}
			</NavWrapper>
		</NavContainer>
	);
};
