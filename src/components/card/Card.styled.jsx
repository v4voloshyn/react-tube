import styled from 'styled-components';

export const CardContainer = styled.div`
	/*min-width: 300px;*/
	max-width: 300px;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;

	cursor: pointer;
	border: 1px solid black;
`;

export const CardImage = styled.img`
	width: 100%;
	height: 202px;
	background-color: #999;
	object-fit: fill;
`;

export const CardDetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 16px;
	row-gap: 12px;
	column-gap: 12px;
	padding: 10px 15px 10px 15px;
`;

export const ChannelAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #999;
	object-fit: fill;
	flex: 0 0 auto;
`;

export const CardDetails = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	row-gap: 10px;
`;

export const CardTitle = styled.h2`
	font-size: 16px;
	line-height: 24px;
	font-weight: 700;
	max-height: 48px;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
`;

export const ChannelName = styled.h3`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoftColor};
`;

export const Info = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoftColor};
`;
