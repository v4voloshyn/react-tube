import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { format } from 'timeago.js';
import {
	ThumbUp,
	ThumbDown,
	Share,
	ThumbUpAltOutlined,
	ThumbDownAltOutlined,
} from '@mui/icons-material';

import {
	cleanVideoError,
	dislikeVideo,
	fetchVideoFailure,
	fetchVideoStart,
	fetchVideoSuccess,
	likeVideo,
	setVideoError,
} from '../../redux/videoSlice';
import { subscribeOnChannel } from '../../redux/userSlice';
import { api } from '../../axios/instance';
import { toast } from 'react-toastify';
import { Hr, ChannelImg } from '../../components/UI';
import { Comments } from '../../components/comment';
import { Recommendation } from '../../components/recommendation/Recommendation';

import {
	Content,
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

export const Video = () => {
	const [channelData, setChannelData] = useState({});
	const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.user.data);
	const currentVideo = useSelector((state) => state.video.data);
	const currentUserID = currentUser?._id;

	const videoID = useLocation().pathname.split('/')[2];

	const handleLike = async () => {
		if (!currentUserID) {
			toast.error('Please, Sign in first');
			return;
		}
		const res = await api.put(`/users/like/${videoID}`);
		if (res.statusText === 'OK') {
			dispatch(likeVideo(currentUserID));
		}
	};
	const handleDislike = async () => {
		if (!currentUserID) {
			toast.error('Please, Sign in first');
			return;
		}
		const res = await api.put(`/users/dislike/${videoID}`);
		if (res.statusText === 'OK') {
			dispatch(dislikeVideo(currentUserID));
		}
	};

	const handleSubscribe = async () => {
		let response;
		dispatch(cleanVideoError());
		try {
			if (currentUser && currentUser.subscribedUsers.includes(channelData._id)) {
				response = await api.put(`/users/unsub/${channelData._id}`); // TODO Handle case in REDUX when user is not logined
			} else {
				response = await api.put(`/users/sub/${channelData._id}`);
			}
			if (response.statusText === 'OK') {
				dispatch(subscribeOnChannel(channelData._id));
			} else {
				throw new Error();
			}
		} catch (error) {
			console.log(error);
			dispatch(setVideoError(error.response.data.message));
		}
	};

	useEffect(() => {
		dispatch(fetchVideoStart());

		const fetchVideo = async () => {
			try {
				const videoResponse = await api.get(`/videos/find/${videoID}`);
				const channelResponse = await api.get(`/users/find/${videoResponse.data.userId}`);

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
					<ReactPlayer
						width='100%'
						height='100%'
						url={currentVideo.videoUrl}
						title={currentVideo.title}
						config={{
							youtube: {
								playerVars: { showinfo: 1 },
							},
						}}
						controls
						light={currentVideo.imgUrl}
						volume={0.3}
					/>
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
					<SubscribeBtn
						onClick={handleSubscribe}
						isSub={currentUser?.subscribedUsers?.includes(channelData._id)}
					>
						{currentUser?.subscribedUsers?.includes(channelData._id) ? 'Subscribed' : 'Subscribe'}
					</SubscribeBtn>
				</Channel>
				<Hr />
				<Comments videoID={videoID} />
			</Content>
			<Recommendation tags={currentVideo.tags} />
		</VideoContainer>
	);
};
