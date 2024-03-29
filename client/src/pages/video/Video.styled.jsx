import styled from 'styled-components';

export const VideoContainer = styled.div`
	min-height: 100vh;
	display: flex;
	gap: 24px;
	margin-top: 20px;
	padding: 0 15px;
	@media (max-width: 767.98px) {
		flex-direction: column;
	}
`;

export const Content = styled.div`
	flex: 6;
`;

export const Recomendations = styled.div`
	flex: 2.5;
	padding-right: 10px;
`;

export const VideoBody = styled.div`
	height: 75vh;
	width: 100%;
	aspect-ratio: 16 / 9;
`;

export const VideoTitle = styled.h1`
	font-size: 1.25rem;
	font-weight: 500;
	padding: 20px 0 10px 10px;
	color: ${({ theme }) => theme.textColor};
`;

export const VideoDetails = styled.div`
	padding-left: 10px;
	margin-bottom: -5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 25px;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.textSoftColor};
`;

export const VideoInfo = styled.span`
	font-size: 0.8rem;
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
	padding-left: 15px;
`;

export const ChannelInfo = styled.div`
	display: flex;
	column-gap: 10px;
	justify-content: space-between;
`;

export const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	color: ${({ theme }) => theme.textColor};
`;

export const ChannelName = styled.span`
	font-weight: 500;
`;

export const ChannelCounter = styled.span`
	color: ${({ theme }) => theme.textSoftColor};
	font-size: 12px;
`;

export const ChannelDescr = styled.p`
	padding-top: 10px;
	font-size: 0.9rem;
`;

export const SubscribeBtn = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	height: max-content;
	background-color: ${({ isSub, theme }) => (isSub ? theme.hrColor : '#cf2305')};
	border: 2px solid transparent;
	border-radius: 3px;
	color: ${({ theme }) => theme.textColor};
	cursor: pointer;
	transition: all ease-in-out 0.3s;

	&:hover {
		box-shadow: ${({ theme }) => theme.shadow};
	}
`;
