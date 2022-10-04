import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CContainer, CWrapper } from './Comments.styled';
import { NewComment } from './NewComment';
import { Comment } from './SingleComment';

export const Comments = ({ videoID }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const resp = await axios.get(`/comments/${videoID}`);
			setComments(resp.data);
		};

		fetchComments();
	}, [videoID]);

	return (
		<CContainer>
			<NewComment />
			<CWrapper>
				{!comments?.length && <h3 style={{ margin: 'auto' }}>Add your first comment</h3>}
				{comments && comments.map((comment) => <Comment {...comment} key={comment._id} />)}
			</CWrapper>
		</CContainer>
	);
};
