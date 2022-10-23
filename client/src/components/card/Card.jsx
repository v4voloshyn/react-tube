import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { api } from '../../axios/instance';

import { SCLink } from '../UI';

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
import { Skeleton } from '../UI/Skeleton/Skeleton';

export const Card = ({ type, video = [], skeleton }) => {
	const [channel, setChannel] = useState([]);

	useEffect(() => {
		const getChannelInfo = async () => {
			try {
				const response = await api.get(`/users/find/${video.userId}`);
				setChannel(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		if (video.userId) {
			getChannelInfo();
		}
	}, [video.userId]);

	if (skeleton && type !== 'sm') {
		return (
			<CardContainer type={type}>
				<Skeleton />
			</CardContainer>
		);
	}

	return (
		<SCLink to={`/video/${video._id}`}>
			<CardContainer type={type}>
				<CardImage src={video.imgUrl || CardPoster} type={type} />
				<CardDetailsWrapper type={type}>
					<ChannelAvatar src={channel.img} type={type} />
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
