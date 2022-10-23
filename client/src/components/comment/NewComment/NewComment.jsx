import { useState } from 'react';
import { useSelector } from 'react-redux';

import { NCInput, NCContainer, NCWrapper, NCAddBtn, SendIcon } from './NewComment.styled';
import { ChannelImg, SCButton } from '../../../components/UI';
import { api } from '../../../axios/instance';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { cancelBtn } from '../../../utils/theme';

export const NewComment = ({ type, textToEdit, setEdit, commentID }) => {
	const [commentText, setCommentText] = useState(textToEdit || '');
	const [editedText, setEditedText] = useState(textToEdit || '');

	const currentUser = useSelector((state) => state.user?.data);
	const videoID = useLocation().pathname.split('/')[2];

	const addComment = async (text, videoId) => {
		try {
			const response = await api.post(`/comments`, { text, videoId });
			if (response.statusText === 'Created') {
				setCommentText('');
			}
			console.log('response', response.data);
			// Put response in local redux commentSlice
		} catch (error) {
			console.log(error);
			toast.warn(error.response.data.message);
		}
	};

	const updateComment = async (commentID) => {
		try {
			const response = await api.put(`/comments/${commentID}`, { text: editedText });
			// Put response in local redux commentSlice
			if (response.statusText === 'OK') {
				setEdit(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (type === 'create') {
		return (
			<NCContainer>
				<NCWrapper>
					<ChannelImg src={currentUser?.img || ''} />
					<NCInput
						placeholder='Add your comment...'
						value={commentText}
						onChange={(e) => setCommentText(e.target.value)}
					/>
					<NCAddBtn disabled={!commentText.length} onClick={() => addComment(commentText, videoID)}>
						<SendIcon />
					</NCAddBtn>
				</NCWrapper>
			</NCContainer>
		);
	}
	if (type === 'edit') {
		return (
			<NCContainer>
				<NCWrapper>
					<NCInput
						placeholder='Add your comment...'
						value={editedText}
						onChange={(e) => setEditedText(e.target.value)}
					/>
					<SCButton style={cancelBtn} onClick={() => setEdit(false)}>
						Cancel
					</SCButton>
					<NCAddBtn disabled={!commentText.length} onClick={() => updateComment(commentID)}>
						<SendIcon />
					</NCAddBtn>
				</NCWrapper>
			</NCContainer>
		);
	}
};
