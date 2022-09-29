import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

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
import app from '../../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

	const uploadFile = (file, fileUrlType) => {
		const storage = getStorage(app);
		const filename = new Date().getTime() + file?.name;
		const storageRef = ref(storage, filename);

		const uploadTask = uploadBytesResumable(storageRef, file);

		// Listen for state changes, errors, and completion of the upload.
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				fileUrlType === 'imgUrl'
					? setImagePerc(progress.toFixed(1))
					: setVideoPerc(progress.toFixed(1));

				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
						break;
				}
			},
			(error) => {
				console.log(error);
			},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setTextInputs((prev) => ({
						...prev,
						[fileUrlType]: downloadURL,
					}));
				});
			}
		);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		if (!textInputs || !tags || !image || !video) return;

		const res = await axios.post('/videos', { ...textInputs, tags, image, video });

		if (res.status === 201) {
			setIsShown(false);
			navigate(`/video/${res.data._id}`);
		}
	};

	useEffect(() => {
		video && uploadFile(video, 'videoUrl');
	}, [video]);

	useEffect(() => {
		image && uploadFile(image, 'imgUrl');
	}, [image]);

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
					<Input type='file' accept='video/*' onChange={(e) => setVideo(e.target.files[0])} />
				)}

				<Label>Title:</Label>
				<Input
					type='text'
					name='title'
					placeholder='Title'
					value={textInputs['title']}
					onChange={handleInputChange}
				/>
				<InputArea
					rows='8'
					type='text'
					name='description'
					placeholder='Add video description'
					onChange={handleInputChange}
				/>
				<Input
					type='text'
					placeholder='Add tags, separated with commas'
					//value={textInputs['tags']}
					onChange={handleTags}
				/>
				<Label>Video thumbnail:</Label>
				{imagePerc > 0 ? (
					<span>Uploading: {imagePerc}%</span>
				) : (
					<Input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
				)}

				<Button onClick={handleUpload}>Upload video</Button>
			</Wrapper>
		</Container>
	);
};
