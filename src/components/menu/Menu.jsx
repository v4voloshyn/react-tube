import React from 'react';
import {
	Button,
	Container,
	Hr,
	Img,
	Item,
	Login,
	Logo,
	Wrapper,
} from './Menu.styled';
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

export const Menu = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<Img src={LogoImg} /> React Tube
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
				<Item>
					<SettingsBrightness />
					Mode
				</Item>
			</Wrapper>
		</Container>
	);
};
