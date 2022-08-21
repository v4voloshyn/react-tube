import React from 'react';
import {
	CardContainer,
	CardDetails,
	CardDetailsWrapper,
	CardImage,
	CardTitle,
	ChannelAvatar,
	ChannelName,
	Info,
} from './Card.styled';

import CardPoster from '../../assets/post1.jpg';
import ChannelAvatarImg from '../../assets/boriska.jpg';
import { SCLink } from '../UI';
export const Card = () => {
	return (
		<SCLink to='video/test123'>
			<CardContainer>
				<CardImage src={CardPoster} />
				<CardDetailsWrapper>
					<ChannelAvatar src={ChannelAvatarImg} />
					<CardDetails>
						<CardTitle>
							Typescript + Node.js tutorial. You definitely should learn this topic
						</CardTitle>
						<ChannelName>Barbariska Johnsonuk</ChannelName>
						<Info>Added 20 min ago</Info>
					</CardDetails>
				</CardDetailsWrapper>
			</CardContainer>
		</SCLink>
	);
};
