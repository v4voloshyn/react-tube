import React from 'react';
import {
	Content,
	Recomendations,
	VideoContainer,
	VideoDetails,
	VideoTitle,
	VideoBody,
	VideoInfo,
	VideoButtons,
	Button,
	Channel,
	ChannelInfo,
	SubscribeBtn,
	ChannelImg,
	ChannelDetail,
	ChannelName,
	ChannelCounter,
	ChannelDescr,
} from './Video.styled';

import { ThumbUp, ThumbDown, Share } from '@mui/icons-material';
import { Hr } from '../../components/UI';
import { Comments } from '../../components/comment';
import ChanelLogo from '../../assets/boriska.jpg';
import { Card } from '../../components/card';

export const Video = () => {
	return (
		<VideoContainer>
			<Content>
				<VideoBody>
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/JUXRMuDoVm4'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</VideoBody>
				<VideoTitle>
					Typescript + Node.js tutorial. You definitely should learn this topic
				</VideoTitle>
				<VideoDetails>
					<VideoInfo>3,425,777 views * Aug 22, 2022</VideoInfo>
					<VideoButtons>
						<Button>
							<ThumbUp /> 777k
						</Button>
						<Button>
							<ThumbDown /> Dislike
						</Button>
						<Button>
							<Share /> Share
						</Button>
					</VideoButtons>
				</VideoDetails>
				<Hr />
				<Channel>
					<ChannelInfo>
						<ChannelImg src={ChanelLogo} />
						<ChannelDetail>
							<ChannelName>Barbariska Johnsonuk</ChannelName>
							<ChannelCounter>40.3M subscribers</ChannelCounter>
							<ChannelDescr>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque magnam ratione
								dolor aliquid quisquam officiis exercitationem natus labore veniam dolores?
							</ChannelDescr>
						</ChannelDetail>
					</ChannelInfo>
					<SubscribeBtn>Subscribe</SubscribeBtn>
				</Channel>
				<Hr />
				<Comments></Comments>
			</Content>
			<Recomendations>
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
			</Recomendations>
		</VideoContainer>
	);
};
