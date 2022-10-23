import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';

import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

import { api } from '../../../axios/instance';
import { setFullURL } from './utils/setFullUrl';

import {
	AuthorImg,
	AuthorName,
	CommentDate,
	CommentDetails,
	CommentInfo,
	CommentText,
	CommentContainer,
	CommentActions,
	CommentAction,
	CommentPrivateActions,
} from './Comment.styled';
import { toast } from 'react-toastify';
import { NewComment } from '../NewComment';

export const Comment = (comment) => {
	const [commentUser, setCommentUser] = useState({});
	const [isEdit, setEdit] = useState(false);
	const currentUserID = useSelector((state) => state.user.data?._id);

	const handleDelete = async (commentId) => {
		try {
			const response = await api.delete(`/comments/${commentId}`);
			// Put response in local redux commentSlice
		} catch (error) {
			toast.warn(error.response.data.message);
			console.log('error :>>', error);
		}
	};

	const renderEditCommentForm = () => {
		return (
			<NewComment type='edit' textToEdit={comment.text} commentID={comment._id} setEdit={setEdit} />
		);
	};
	const renderComment = () => {
		return (
			<>
				<CommentText>{comment.text}</CommentText>
				<CommentActions>
					<ThumbUpAltOutlined />
					<ThumbDownAltOutlined />
					<CommentAction>Answer</CommentAction>
					{currentUserID === commentUser._id && (
						<CommentPrivateActions>
							<CommentAction onClick={() => setEdit(true)}>Edit</CommentAction>
							<CommentAction onClick={() => handleDelete(comment._id)}>Delete</CommentAction>
						</CommentPrivateActions>
					)}
				</CommentActions>
			</>
		);
	};

	useEffect(() => {
		const fetchCommentAuthor = async () => {
			try {
				const resp = await api.get(`/users/find/${comment.userId}`);
				setCommentUser(resp.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCommentAuthor();
	}, [comment.userId]);

	return (
		<CommentContainer>
			<CommentInfo>
				<AuthorImg src={setFullURL(commentUser.img)} />
				<CommentDetails>
					<AuthorName>
						{commentUser.name}
						<CommentDate>{format(comment.createdAt)}</CommentDate>
					</AuthorName>
					{isEdit ? renderEditCommentForm() : renderComment()}
				</CommentDetails>
			</CommentInfo>
		</CommentContainer>
	);
};
