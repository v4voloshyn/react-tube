import React, { useState, useEffect } from 'react';
import {
	AuthorImg,
	AuthorName,
	CommentDate,
	CommentDetails,
	CommentInfo,
	CommentText,
	CommentContainer,
} from './Comment.styled';
import { format } from 'timeago.js';
import axios from 'axios';

export const Comment = (comment) => {
	const [commentUser, setCommentUser] = useState({});

	useEffect(() => {
		const fetchCommentAuthor = async () => {
			const resp = await axios.get(`/users/find/${comment.userId}`);
			setCommentUser(resp.data);
		};

		fetchCommentAuthor();
	}, [comment.userId]);

	const setFullURL = (url = '') => {
		return url.includes('https://') || url.includes('http://') ? url : `https://${url}`;
	};

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
				</CommentDetails>
			</CommentInfo>
		</CommentContainer>
	);
};
