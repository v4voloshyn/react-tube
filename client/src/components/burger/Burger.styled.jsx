import styled from 'styled-components';

export const Overlay = styled.div``;

export const StyledBurger = styled.button`
	position: absolute;
	top: 16px;
	left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 1.5rem;
	height: 1.5rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	overflow: hidden;

	div {
		width: 1.5rem;
		height: 0.15rem;
		background: ${({ theme }) => theme.textSoftColor};
		border-radius: 0px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(-20px)' : 'translateX(0)')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
