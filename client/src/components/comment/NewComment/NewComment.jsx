import React from 'react';
import { NCInput, NCContainer, NCWrapper } from './NewComment.styled';
import ChanelLogo from '../../../assets/avatar.png';
import { ChannelImg } from '../../../components/UI';

export const NewComment = () => {
	return (
		<NCContainer>
			<NCWrapper>
				<ChannelImg src={ChanelLogo} />
				<NCInput placeholder='Add your comment...' />
			</NCWrapper>
		</NCContainer>
	);
};
