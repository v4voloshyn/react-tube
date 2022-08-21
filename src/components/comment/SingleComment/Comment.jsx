import React from 'react';
import {
	AuthorImg,
	AuthorName,
	CommentDate,
	CommentDetails,
	CommentInfo,
	CommentText,
	CommentContainer,
} from './Comment.styled';
import ChanelLogo from '../../../assets/avatar.png';

export const Comment = () => {
	return (
		<CommentContainer>
			<CommentInfo>
				<AuthorImg src={ChanelLogo} />
				<CommentDetails>
					<AuthorName>
						Batman
						<CommentDate>59 minutes ago</CommentDate>
					</AuthorName>
					<CommentText>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque magnam ratione
						dolor aliquid quisquam officiis exercitationem natus labore veniam dolores?
					</CommentText>
				</CommentDetails>
			</CommentInfo>
		</CommentContainer>
	);
};
