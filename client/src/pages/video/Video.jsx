import React, { useEffect, useState } from 'react';
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
	ChannelDetail,
	ChannelName,
	ChannelCounter,
	ChannelDescr,
} from './Video.styled';

import {
	ThumbUp,
	ThumbDown,
	Share,
	ThumbUpAltOutlined,
	ThumbDownAltOutlined,
} from '@mui/icons-material';
import { Hr, ChannelImg } from '../../components/UI';
import { Comments } from '../../components/comment';
import ChanelLogo from '../../assets/boriska.jpg';
import { Card } from '../../components/card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
	dislikeVideo,
	fetchVideoFailure,
	fetchVideoStart,
	fetchVideoSuccess,
	likeVideo,
} from '../../redux/videoSlice';
import { format } from 'timeago.js';

export const Video = () => {
	const [channelData, setChannelData] = useState({});

	const currentUserID = useSelector((state) => state.user.data?._id);
	const currentVideo = useSelector((state) => state.video.data);

	const videoID = useLocation().pathname.split('/')[2];

	const dispatch = useDispatch();

	const handleLike = async () => {
		const res = await axios.put(`/users/like/${videoID}`);
		if (res.statusText === 'OK') {
			dispatch(likeVideo(currentUserID));
		}
	};
	const handleDislike = async () => {
		const res = await axios.put(`/users/dislike/${videoID}`);
		if (res.statusText === 'OK') {
			dispatch(dislikeVideo(currentUserID));
		}
	};

	useEffect(() => {
		dispatch(fetchVideoStart());

		const fetchVideo = async () => {
			try {
				const videoResponse = await axios.get(`/videos/find/${videoID}`);
				const channelResponse = await axios.get(`/users/find/${videoResponse.data.userId}`);

				setChannelData(channelResponse.data);

				dispatch(fetchVideoSuccess(videoResponse.data));
			} catch (error) {
				dispatch(fetchVideoFailure(error));
			}
		};

		fetchVideo();
	}, [videoID, dispatch]);

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
				<VideoTitle>{currentVideo.title}</VideoTitle>
				<VideoDetails>
					<VideoInfo>
						{currentVideo.views} views * {format(currentVideo.createdAt)}
					</VideoInfo>
					<VideoButtons>
						<Button onClick={handleLike}>
							{currentVideo.likes?.includes(currentUserID) ? <ThumbUp /> : <ThumbUpAltOutlined />}
							{currentVideo.likes?.length}
						</Button>
						<Button onClick={handleDislike}>
							{currentVideo.dislikes?.includes(currentUserID) ? (
								<ThumbDown />
							) : (
								<ThumbDownAltOutlined />
							)}
							Dislike
						</Button>
						<Button>
							<Share /> Share
						</Button>
					</VideoButtons>
				</VideoDetails>
				<Hr />
				<Channel>
					<ChannelInfo>
						<ChannelImg src={channelData.img} />
						<ChannelDetail>
							<ChannelName>{channelData.name}</ChannelName>
							<ChannelCounter>{channelData.subscribers} subscribers</ChannelCounter>
							<ChannelDescr>{currentVideo.description}</ChannelDescr>
						</ChannelDetail>
					</ChannelInfo>
					<SubscribeBtn>Subscribe</SubscribeBtn>
				</Channel>
				<Hr />
				<Comments></Comments>
			</Content>
			<Recomendations>
				{/*<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />*/}
			</Recomendations>
		</VideoContainer>
	);
};
