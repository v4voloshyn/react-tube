import React from 'react';
import { StyledBurger } from './Burger.styled';

export const Burger = ({ open, setOpen, burgerRef }) => {
	return (
		<StyledBurger ref={burgerRef} open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};
