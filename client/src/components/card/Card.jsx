import React, { useEffect, useState } from 'react';
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

import { format } from 'timeago.js';

import CardPoster from '../../assets/post1.jpg';
import ChannelAvatarImg from '../../assets/boriska.jpg';
import { SCLink } from '../UI';
import axios from 'axios';

export const Card = ({ type, video = [] }) => {
	const [channel, setChannel] = useState([]);
	console.log('video :>> ', channel);
	useEffect(() => {
		const getChannelInfo = async () => {
			const response = await axios.get(`/users/find/${video.userId}`);
			setChannel(response.data);
		};

		getChannelInfo();
	}, [video.userId]);

	console.log('channelInfo :>> ', channel);
	return (
		<SCLink to='/video/test123'>
			<CardContainer type={type}>
				<CardImage src={video.imgUrl || CardPoster} type={type} />
				<CardDetailsWrapper type={type}>
					<ChannelAvatar src={channel.img || ChannelAvatarImg} type={type} />
					<CardDetails type={type}>
						<CardTitle type={type}>{video.title}</CardTitle>
						<ChannelName>{channel.name}</ChannelName>
						<Info>
							{video.views} views * Added {format(video.createdAt)}
						</Info>
					</CardDetails>
				</CardDetailsWrapper>
			</CardContainer>
		</SCLink>
	);
};
