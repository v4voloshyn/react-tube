import { useState } from 'react';
import { useSelector } from 'react-redux';

import { NCInput, NCContainer, NCWrapper, NCAddBtn, SendIcon } from './NewComment.styled';
import { ChannelImg } from '../../../components/UI';

export const NewComment = () => {
	const currentUser = useSelector((state) => state.user?.data);
	const [commentText, setCommentText] = useState('');

	return (
		<NCContainer>
			<NCWrapper>
				<ChannelImg src={currentUser?.img || ''} />
				<NCInput
					placeholder='Add your comment...'
					onChange={(e) => setCommentText(e.target.value)}
				/>
				<NCAddBtn disabled={!commentText.length}>
					<SendIcon />
				</NCAddBtn>
			</NCWrapper>
		</NCContainer>
	);
};
