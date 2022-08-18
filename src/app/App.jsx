import React from 'react';
import { Menu } from '../components/menu';
import { Navbar } from '../components/navbar';
import { Container, Main, Wrapper } from './App.styled';

export const App = () => {
	return (
		<Container>
			<Menu />
			<Main>
				<Navbar />
				<Wrapper>Video Cards</Wrapper>
			</Main>
		</Container>
	);
};
