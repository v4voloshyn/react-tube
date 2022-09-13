import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { HomeContainer } from './Home.styled';
import axios from 'axios';

export const Home = ({ type }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideos = async () => {
			const response = await axios.get(`/videos/${type}`);
			setVideos(response.data);
		};

		getVideos();
	}, [type]);

	return (
		<HomeContainer>
			{videos.map((video) => (
				<Card key={video._id} video={video} />
			))}
		</HomeContainer>
	);
};
