import { SendRounded } from '@mui/icons-material';
import styled from 'styled-components';

export const NCContainer = styled.div``;

export const NCWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: 20px;
	margin: 20px 0px;
`;

export const NCInput = styled.input`
	width: 100%;
	border: none;
	color: ${({ theme }) => theme.textColor};
	border-bottom: 1px solid ${({ theme }) => theme.textSoftColor};
	background-color: transparent;
	padding: 5px;
	outline: none;
	&:hover,
	&:focus {
		border-bottom: 2px solid ${({ theme }) => theme.textSoftColor};
	}
`;
export const SendIcon = styled(SendRounded)`
	width: 100%;
	height: 100%;
`;

export const NCAddBtn = styled.button`
	width: 40px;
	height: 100%;
	margin: 0 auto;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:not(:disabled) {
		background-color: ${({ theme }) => theme.hrColor};
		transition: all ease-in-out 0.3s;
		&:hover {
			box-shadow: ${({ theme }) => theme.shadow};
			& ${SendIcon} {
				transform: translateX(4px);
			}
		}

		& ${SendIcon} {
			color: #1469b4;
			transition: all ease-in-out 0.3s;
		}
	}
`;
