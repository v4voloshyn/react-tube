import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { uploadFile } from './helpers/uploadFile';
import { api } from '../../axios/instance';

import {
	Button,
	CloseBtn,
	Container,
	Input,
	InputArea,
	Label,
	Title,
	Wrapper,
} from './Upload.styled';

export const Upload = ({ setIsShown }) => {
	const [textInputs, setTextInputs] = useState({});
	const [video, setVideo] = useState(null);
	const [image, setImage] = useState(null);
	const [tags, setTags] = useState([]);
	const [imagePerc, setImagePerc] = useState(0);
	const [videoPerc, setVideoPerc] = useState(0);

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setTextInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleTags = (e) => {
		setTags(e.target.value.split(',').map((el) => el.trim()));
	};

	const handleUpload = async (e) => {
		e.preventDefault();

		if (!textInputs.title || !tags.length || !image || !video) {
			toast.warn('All fields are required');
			return;
		}

		const [videoUrl, imgUrl] = await Promise.all([
			uploadFile(video, setVideoPerc),
			uploadFile(image, setImagePerc),
		]);

		const res = await api.post('/videos', { ...textInputs, videoUrl, imgUrl, tags });

		if (res.status === 201) {
			setIsShown(false);
			navigate(`/video/${res.data._id}`);
		}
	};

	return (
		<Container>
			<Wrapper>
				<CloseBtn type='button' onClick={() => setIsShown(false)}>
					X
				</CloseBtn>
				<Title>Upload your video</Title>
				<Label>Video:</Label>
				{videoPerc > 0 ? (
					<span>Uploading: {videoPerc}%</span>
				) : (
					<Input
						type='file'
						name='video'
						accept='video/*'
						onChange={(e) => setVideo(e.target.files[0])}
					/>
				)}

				<Label>Title:</Label>
				<Input type='text' name='title' placeholder='Title' onChange={handleInputChange} />
				<InputArea
					rows='8'
					type='text'
					name='description'
					placeholder='Add video description'
					onChange={handleInputChange}
				/>
				<Input
					type='text'
					name='tags'
					placeholder='Add tags, separated with commas'
					onChange={handleTags}
				/>
				<Label>Video thumbnail:</Label>
				{imagePerc > 0 && imagePerc < 100 && (
					<div>
						Uploading {image.name}: {imagePerc}%
					</div>
				)}
				{imagePerc >= 100 && <div>Uploaded {image.name}</div>}
				{imagePerc === 0 && (
					<Input
						type='file'
						name='image'
						accept='image/*'
						onChange={(e) => setImage(e.target.files[0])}
					/>
				)}

				<Button onClick={handleUpload}>Upload video</Button>
			</Wrapper>
		</Container>
	);
};
