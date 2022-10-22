import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-direction: ${(props) => (props.type === 'sm' ? 'row' : 'column')};
	max-width: ${({ type }) => (type === 'sm' ? '100%' : '320px')};
	height: ${({ type }) => (type === 'sm' ? '100%' : '300px')};
	margin-bottom: ${({ type }) => type === 'sm' && '0.5rem'};

	border-top-left-radius: 15px;
	border-top-right-radius: ${(props) => (props.type === 'sm' ? '0' : '15px')};
	border-bottom-left-radius: ${(props) => (props.type === 'sm' ? '15px' : '0')};

	cursor: pointer;

	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.03);
	}
`;

export const CardImage = styled.img`
	width: ${({ type }) => (type === 'sm' ? '168px' : '100%')};
	height: ${({ type }) => (type === 'sm' ? '94px' : '185px')};
	background-color: #999;
	object-fit: unset;
	/*flex: 1 0 4;*/
	border-radius: 15px;
`;

export const CardDetailsWrapper = styled.div`
	display: flex;
	flex: 3;
	width: 100%;
	justify-content: space-between;
	margin-top: ${({ type }) => type !== 'sm' && '0.5rem'};
	row-gap: 10px;
	column-gap: 10px;
	padding: ${({ type }) => (type === 'sm' ? '2px 10px' : '10px')};
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
	max-height: ${({ type }) => (type === 'sm' ? '35px' : '38px')};
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
