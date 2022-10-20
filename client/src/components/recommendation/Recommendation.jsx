import { useEffect, useState } from 'react';

import { api } from '../../axios/instance';

import { Card } from '../card';
import { Container } from './Recommendation.styled';

export const Recommendation = ({ tags }) => {
	const [recomVideos, setRecomVideos] = useState([]);

	useEffect(() => {
		const fetchRecVideos = async () => {
			const res = await api.get(`/videos/tags?tags=${tags?.join(',')}`);
			setRecomVideos(res.data);
		};

		fetchRecVideos();
	}, [tags]);

	return (
		<Container>
			{recomVideos.map((video) => (
				<Card type='sm' key={video._id} video={video} />
			))}
		</Container>
	);
};
