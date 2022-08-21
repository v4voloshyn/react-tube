import styled from 'styled-components';

export const CardContainer = styled.div`
	margin-bottom: ${({ type }) => type === 'sm' && '0.5rem'};
	max-width: ${({ type }) => (type === 'sm' ? '100%' : '300px')};
	display: flex;
	flex-direction: ${(props) => (props.type === 'sm' ? 'row' : 'column')};
	flex: 1 1 auto;

	cursor: pointer;
	border: 1px solid lightgray;
`;

export const CardImage = styled.img`
	width: ${({ type }) => (type === 'sm' ? '168px' : '300px')};
	height: ${({ type }) => (type === 'sm' ? '94px' : '202px')};
	background-color: #999;
	object-fit: cover;
	flex: 1 0 auto;
`;

export const CardDetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${({ type }) => type !== 'sm' && '0.5rem'};
	row-gap: 10px;
	column-gap: 10px;
	padding: ${({ type }) => (type === 'sm' ? '2px 10px' : '10px 15px')};
`;

export const ChannelAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #999;
	object-fit: fill;
	flex: 0 0 auto;
	display: ${({ type }) => type === 'sm' && 'none'};
`;

export const CardDetails = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	row-gap: ${({ type }) => (type === 'sm' ? '3px' : '5px')};
`;

export const CardTitle = styled.h2`
	font-size: 0.9rem;
	line-height: 1.1rem;
	font-weight: 700;
	max-height: ${({ type }) => (type === 'sm' ? '35px' : '48px')};
	/*text-overflow: ellipsis;*/
	overflow: hidden;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
`;

export const ChannelName = styled.h3`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.textSoftColor};
	white-space: nowrap;
`;

export const Info = styled.p`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.textSoftColor};
`;
