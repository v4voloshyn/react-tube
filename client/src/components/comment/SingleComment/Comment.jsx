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

export const Comment = (comment) => {
	const [commentUser, setCommentUser] = useState({});
	const currentUserID = useSelector((state) => state.user.data._id);

	useEffect(() => {
		const fetchCommentAuthor = async () => {
			const resp = await api.get(`/users/find/${comment.userId}`);
			setCommentUser(resp.data);
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
					<CommentText>{comment.text}</CommentText>
					<CommentActions>
						<ThumbUpAltOutlined />
						<ThumbDownAltOutlined />
						<CommentAction>Answer</CommentAction>
						{currentUserID === comment.userId && (
							<CommentPrivateActions>
								<CommentAction>Edit</CommentAction>
								<CommentAction>Delete</CommentAction>
							</CommentPrivateActions>
						)}
					</CommentActions>
				</CommentDetails>
			</CommentInfo>
		</CommentContainer>
	);
};
