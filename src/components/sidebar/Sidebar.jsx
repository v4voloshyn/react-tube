import React from 'react';
import { Button, Container, Hr, Img, Item, Login, Logo, Title, Wrapper } from './Sidebar.styled';
import LogoImg from '../../assets/logo.webp';
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
import { SCLink } from '../UI';
console.log('first');

export const Sidebar = ({ changeTheme, isDarkMode }) => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<SCLink to='/'>
						<Img src={LogoImg} /> React Tube
					</SCLink>
				</Logo>
				<Item>
					<HomeIcon />
					Home
				</Item>
				<Item>
					<Explore />
					Explore
				</Item>
				<Item>
					<Subscriptions />
					Subscriptions
				</Item>

				<Hr />
				<Item>
					<VideoLibrary />
					Video
				</Item>
				<Item>
					<History />
					History
				</Item>
				<Hr />
				<Login>
					Sign in to like videos, comment, and subscribe.
					<Button>
						<Person />
						SIGN IN
					</Button>
				</Login>
				<Hr />
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
					{isDarkMode ? 'Light theme' : 'Dark theme'}
				</Item>
			</Wrapper>
		</Container>
	);
};
