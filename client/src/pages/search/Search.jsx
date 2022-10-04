import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components';
import { Container } from './Search.styled';

export const Search = () => {
	const [foundVideos, setFoundVideos] = useState([]);

	const searchQuery = useLocation().search;

	useEffect(() => {
		const fetchVideos = async () => {
			const res = await axios.get(`/videos/search${searchQuery}`);
			setFoundVideos(res.data);
		};

		fetchVideos();
	}, [searchQuery]);

	return (
		<Container>
			{foundVideos.map((video) => (
				<Card key={video._id} video={video} />
			))}
		</Container>
	);
};
