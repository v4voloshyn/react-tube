import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { HomeContainer } from './Home.styled';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Home = ({ type }) => {
	const [videos, setVideos] = useState([]);
	const isAuth = useSelector((state) => !!state.user?.data?._id);

	const navigate = useNavigate();

	useEffect(() => {
		if (type === 'subscriptions' && !isAuth) {
			navigate('/signin');
		}
		const getVideos = async () => {
			const response = await axios.get(`/videos/${type}`);
			setVideos(response.data);
		};

		getVideos();
	}, [type, isAuth, navigate]);

	return (
		<HomeContainer>
			{videos.map((video) => (
				<Card key={video._id} video={video} />
			))}
		</HomeContainer>
	);
};
