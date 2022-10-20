import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { api } from '../../axios/instance';

import { Card } from '../../components';

import { HomeContainer } from './Home.styled';

export const Home = ({ pageType }) => {
	const [videos, setVideos] = useState([]);
	const isAuth = useSelector((state) => !!state.user?.data?._id);

	const navigate = useNavigate();

	useEffect(() => {
		if (pageType === 'subscriptions' && !isAuth) {
			navigate('/signin');
			return;
		}
		const getVideos = async () => {
			const response = await api.get(`/videos/${pageType}`);
			setVideos(response.data);
		};

		getVideos();
	}, [pageType, isAuth, navigate]);

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
