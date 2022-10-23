import { useState } from 'react';
import { useSelector } from 'react-redux';

import { NCInput, NCContainer, NCWrapper, NCAddBtn, SendIcon } from './NewComment.styled';
import { ChannelImg } from '../../../components/UI';
import { api } from '../../../axios/instance';
import { toast } from 'react-toastify';

export const NewComment = ({ videoID }) => {
	const currentUser = useSelector((state) => state.user?.data);
	const [commentText, setCommentText] = useState('');

	const addComment = async (text, videoId) => {
		try {
			const response = await api.post(`/comments`, { text, videoId });
			console.log('response', response.data);
			// Put response in local redux commentSlice
		} catch (error) {
			toast.warn(error.response.data.message);
			console.log(error.response.data.message);
		}
	};

	return (
		<NCContainer>
			<NCWrapper>
				<ChannelImg src={currentUser?.img || ''} />
				<NCInput
					placeholder='Add your comment...'
					onChange={(e) => setCommentText(e.target.value)}
				/>
				<NCAddBtn disabled={!commentText.length} onClick={() => addComment(commentText, videoID)}>
					<SendIcon />
				</NCAddBtn>
			</NCWrapper>
		</NCContainer>
	);
};
