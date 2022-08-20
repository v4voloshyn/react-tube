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
export const Card = () => {
	return (
		<CardContainer>
			<CardImage src={CardPoster} />
			<CardDetailsWrapper>
				<ChannelAvatar src={ChannelAvatarImg} />
				<CardDetails>
					<CardTitle>
						Typescript + Node.js tutorial. You definitely should learn this topic
					</CardTitle>
					<ChannelName>Boriska Johnsonuk</ChannelName>
					<Info>Added 20 min ago</Info>
				</CardDetails>
			</CardDetailsWrapper>
		</CardContainer>
	);
};
