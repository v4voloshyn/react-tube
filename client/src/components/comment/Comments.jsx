import { useEffect, useState } from 'react';
import { api } from '../../axios/instance';
import { NewComment } from './NewComment';
import { Comment } from './SingleComment';

import { CContainer, CWrapper } from './Comments.styled';
import { Hr } from '../UI';
import { useSelector } from 'react-redux';

export const Comments = ({ videoID }) => {
	const [comments, setComments] = useState([]);
	console.log('comments :>> ', comments);
	const currentUser = useSelector((state) => state.user.data);
	const currentUserID = currentUser?._id;

	console.log('currentUser :>> ', currentUser);

	useEffect(() => {
		const fetchComments = async () => {
			const resp = await api.get(`/comments/${videoID}`);
			setComments(resp.data);
		};

		fetchComments();
	}, [videoID]);

	return (
		<CContainer>
			<NewComment videoID={videoID} />
			<CWrapper>
				{!comments?.length && <h3 style={{ margin: 'auto' }}>Add your first comment</h3>}
				{comments && comments.map((comment) => <Comment {...comment} key={comment._id} />)}
			</CWrapper>
			<Hr />
		</CContainer>
	);
};
