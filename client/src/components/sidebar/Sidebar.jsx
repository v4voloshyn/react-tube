import { useSelector } from 'react-redux';
import {
	Home as HomeIcon,
	Explore,
	Subscriptions,
	VideoLibrary,
	History,
	LibraryMusic,
	SportsFootball,
	SportsEsports,
	Movie,
	Newspaper,
	LiveTv,
	SettingsSuggest,
	ReportGmailerrorred,
	LiveHelp,
	SettingsBrightness,
	Person,
} from '@mui/icons-material';

import { Container, Img, Item, Login, Title, Wrapper } from './Sidebar.styled';
import { SCLink, Hr, LinkBtn, Logo } from '../UI';

import LogoImg from '../../assets/logo.webp';

export const Sidebar = ({ changeTheme, isDarkMode, open, children }) => {
	const userData = useSelector((state) => state.user.data);

	return (
		<Container open={open}>
			<Wrapper>
				{children}
				<Logo>
					<SCLink to='/'>
						<Img src={LogoImg} /> UATube
					</SCLink>
				</Logo>
				<SCLink to='/'>
					<Item>
						<HomeIcon />
						Home
					</Item>
				</SCLink>
				<SCLink to='hot'>
					<Item>
						<Explore />
						Explore
					</Item>
				</SCLink>
				<SCLink to='subscriptions'>
					<Item>
						<Subscriptions />
						Subscriptions
					</Item>
				</SCLink>
				<Hr />
				<SCLink to='hot'>
					<Item>
						<VideoLibrary />
						Video
					</Item>
				</SCLink>
				<Item>
					<History />
					History
				</Item>
				<Hr />
				{userData ? null : (
					<>
						<Login>
							Sign in to like videos, comment, and subscribe.
							<LinkBtn to='signin'>
								<Person />
								SIGN IN
							</LinkBtn>
						</Login>
						<Hr />
					</>
				)}

				<Title>Best of react tube</Title>
				<Item>
					<LibraryMusic />
					Music
				</Item>
				<Item>
					<SportsFootball />
					Sports
				</Item>
				<Item>
					<SportsEsports />
					Games
				</Item>
				<Item>
					<Movie />
					Movies
				</Item>
				<Item>
					<Newspaper />
					News
				</Item>
				<Item>
					<LiveTv />
					Live
				</Item>
				<Hr />
				<Item>
					<SettingsSuggest />
					Settings
				</Item>
				<Item>
					<ReportGmailerrorred />
					Report
				</Item>
				<Item>
					<LiveHelp />
					Help
				</Item>
				<Item onClick={changeTheme}>
					<SettingsBrightness />
					{isDarkMode ? 'Light ' : 'Dark '}theme
				</Item>
			</Wrapper>
		</Container>
	);
};
