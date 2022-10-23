import React from 'react';
import { StyledBurger } from './Burger.styled';

export const Burger = ({ open, setOpen, burgerRef, overlayRef }) => {
	const handleClick = () => {
		setOpen((open) => !open);
	};
	return (
		<StyledBurger ref={burgerRef} open={open} onClick={handleClick}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};
