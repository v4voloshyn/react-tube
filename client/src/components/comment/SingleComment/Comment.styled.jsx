import styled from 'styled-components';

export const CommentContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CommentInfo = styled.div`
	display: flex;
	width: 100%;
	column-gap: 10px;
	justify-content: space-between;
`;

export const AuthorImg = styled.img`
	// TODO: replace into UI compponent
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #999;
	object-fit: fill;
	flex: 0 0 auto;
`;

export const CommentDetails = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	gap: 5px;
	color: ${({ theme }) => theme.textColor};
`;

export const AuthorName = styled.span`
	font-size: 0.95rem;
	font-weight: 500;
`;

export const CommentDate = styled.span`
	color: ${({ theme }) => theme.textSoftColor};
	font-size: 0.8rem;
	font-weight: 300;
	margin-left: 5px;
`;

export const CommentText = styled.p`
	/*padding-top: 5px;*/
	font-size: 0.9rem;
	font-weight: 300;
`;

export const CommentActions = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	flex: 1 1 auto;
	color: ${({ theme }) => theme.textColor};
`;
export const CommentPrivateActions = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${({ theme }) => theme.textColor};
`;

export const CommentAction = styled.span`
	color: ${({ theme }) => theme.textColor};
	font-size: 0.8rem;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;
