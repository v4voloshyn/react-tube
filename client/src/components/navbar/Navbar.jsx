import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ExitToAppOutlined, Person, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';

import { api } from '../../axios/instance';
import { logout } from '../../redux/userSlice';

import { Upload } from '../upload';

import { LinkBtn, Logo, SCButton, SCLink } from '../UI';
import {
	Avatar,
	NavContainer,
	NavInput,
	NavSearch,
	NavWrapper,
	Picture,
	User,
} from './Navbar.styled';

import LogoImg from '../../assets/logo.webp';

export const Navbar = ({ children }) => {
	const [isShown, setIsShown] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const searchInputRef = useRef(null);

	const navigate = useNavigate();
	const URL = useLocation().pathname;

	const userData = useSelector((state) => state.user.data);
	const dispatch = useDispatch();

	const logOut = async () => {
		api.get(`/auth/logout`).then((resp) => {
			dispatch(logout());
		});
	};

	const handleSearchInput = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearch = useCallback(() => {
		if (!searchQuery.length) return;

		navigate(`/search?byTitle=${searchQuery}`);
	}, [navigate, searchQuery]);

	const handleEnterPress = useCallback(
		(e) => {
			if (e.code === 'Enter' && document.activeElement === searchInputRef.current) {
				console.log('e.code', e.code);
				handleSearch();
			}
		},
		[handleSearch]
	);

	useEffect(() => {
		document.addEventListener('keyup', handleEnterPress);

		return () => {
			document.removeEventListener('keyup', handleEnterPress);
		};
	}, [handleEnterPress]);

	useEffect(() => {
		setSearchQuery('');
	}, [URL]);

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
						<NavInput
							ref={searchInputRef}
							placeholder='Search'
							value={searchQuery}
							onChange={handleSearchInput}
						/>
						<SearchOutlined style={{ cursor: 'pointer' }} onClick={handleSearch} />
					</NavSearch>
					{userData ? (
						<User>
							<VideoCallOutlined style={{ cursor: 'pointer' }} onClick={() => setIsShown(true)} />
							<Picture>
								<Avatar src={userData.img} />
							</Picture>
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
