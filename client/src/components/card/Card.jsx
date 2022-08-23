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
export const Card = ({ type }) => {
	return (
		<SCLink to='/video/test123'>
			<CardContainer type={type}>
				<CardImage src={CardPoster} type={type} />
				<CardDetailsWrapper type={type}>
					<ChannelAvatar src={ChannelAvatarImg} type={type} />
					<CardDetails type={type}>
						<CardTitle type={type}>
							Typescript + Node.js tutorial. You definitely should learn this topic
						</CardTitle>
						<ChannelName>Barbariska Johnsonuk</ChannelName>
						<Info>299K views * Added 20 min ago</Info>
					</CardDetails>
				</CardDetailsWrapper>
			</CardContainer>
		</SCLink>
	);
};
