import styled from 'styled-components';

export const VideoContainer = styled.div`
	display: flex;
	gap: 24px;
	margin-top: 20px;
`;

export const Content = styled.div`
	flex: 5;
`;

export const Recomendations = styled.div`
	flex: 2;
`;

export const VideoBody = styled.div`
	min-height: 25vh;
	max-height: 50vh;
	min-width: 30vw;
	width: 100%;
	aspect-ratio: 16 / 9;
`;

export const VideoTitle = styled.h1`
	font-size: 18px;
	font-weight: 500;
	padding: 20px 0 10px 10px;
	color: ${({ theme }) => theme.textColor};
`;

export const VideoDetails = styled.div`
	padding-left: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 25px;
	flex-wrap: wrap;
`;

export const VideoInfo = styled.span`
	font-size: 14px;
	color: ${({ theme }) => theme.textColor};
	flex: 1 0 auto;
	width: max-content;
`;

export const VideoButtons = styled.div`
	display: flex;
	gap: 1rem;
	flex: 0 0 auto;
`;

export const Button = styled.button`
	color: ${({ theme }) => theme.textColor};
	background-color: ${({ theme }) => theme.bgColor};
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 4px;
`;

export const Channel = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding-left: 10px;
`;

export const ChannelInfo = styled.div`
	display: flex;
	column-gap: 10px;
	justify-content: space-between;
`;

export const ChannelImg = styled.img`
	// TODO: replace into UI compponent
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #999;
	object-fit: fill;
	flex: 0 0 auto;
`;

export const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const ChannelName = styled.span`
	color: ${({ theme }) => theme.textColor};
	font-weight: 500;
`;

export const ChannelCounter = styled.span`
	color: ${({ theme }) => theme.textSoftColor};
	font-size: 12px;
`;

export const ChannelDescr = styled.p`
	padding-top: 10px;
	font-size: 14px;
	color: ${({ theme }) => theme.textColor};
`;

export const SubscribeBtn = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	height: max-content;
	background-color: #cf2305;
	border: 2px solid transparent;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	&:hover {
		background-color: #ff2600;
	}
`;
