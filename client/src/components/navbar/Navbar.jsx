import { useState } from 'react';
import { ExitToAppOutlined, Person, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';
import { LinkBtn, Logo, SCButton, SCLink } from '../UI';
import { Avatar, NavContainer, NavInput, NavSearch, NavWrapper, User } from './Navbar.styled';
import LogoImg from '../../assets/logo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import axios from 'axios';
import { Upload } from '../upload/Upload';

export const Navbar = ({ children }) => {
	const [isShown, setIsShown] = useState(false);

	const userData = useSelector((state) => state.user.data);
	const dispatch = useDispatch();

	const logOut = async () => {
		axios.get(`/auth/logout`).then((resp) => {
			console.log('resp :>> ', resp);
			dispatch(logout());
		});
	};

	return (
		<>
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
							<VideoCallOutlined style={{ cursor: 'pointer' }} onClick={() => setIsShown(true)} />
							<Avatar src={userData.img} />
							{userData.name}
							<SCButton onClick={logOut}>
								<ExitToAppOutlined />
								Logout
							</SCButton>
						</User>
					) : (
						<LinkBtn to='signin'>
							<Person />
							SIGN IN
						</LinkBtn>
					)}
				</NavWrapper>
			</NavContainer>

			{isShown && <Upload setIsShown={setIsShown} />}
		</>
	);
};
