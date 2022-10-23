import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { api } from '../../axios/instance';

import { Card } from '../../components';

import { HomeContainer } from './Home.styled';

export const Home = ({ pageType }) => {
	const [videos, setVideos] = useState([]);
	const [isLoadingVideo, setVideoLoading] = useState(false);
	const isAuth = useSelector((state) => !!state.user?.data?._id);

	const navigate = useNavigate();

	useEffect(() => {
		if (pageType === 'subscriptions' && !isAuth) {
			navigate('/signin');
			return;
		}

		const getVideos = async () => {
			try {
				setVideoLoading(true);
				const response = await api.get(`/videos/${pageType}`);

				setVideos(response.data);
				if (response.data) {
					setVideoLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};

		getVideos();
	}, [pageType, isAuth, navigate]);

	if (isLoadingVideo) {
		return (
			<HomeContainer>
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<Card key={index} skeleton={true} />
					))}
			</HomeContainer>
		);
	}

	return (
		<HomeContainer>
			{videos.length ? (
				videos.map((video) => <Card key={video._id} video={video} />)
			) : (
				<h1 style={{ margin: 'auto' }}>NO VIDEOS</h1>
			)}
		</HomeContainer>
	);
};
