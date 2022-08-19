import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Sidebar } from '../components/sidebar';
import { Navbar } from '../components/navbar';
import { darkTheme, lightTheme } from '../utils/theme';
import { Container, Main, Wrapper } from './App.styled';

export const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);
	const changeThemeMode = useCallback(() => {
		setDarkMode((mode) => !mode);
	}, []);

	const currentTheme = isDarkMode ? darkTheme : lightTheme;
	return (
		<ThemeProvider theme={currentTheme}>
			<Container>
				<Sidebar changeTheme={changeThemeMode} isDarkMode={isDarkMode} />
				<Main>
					<Navbar />
					<Wrapper>Video Cards</Wrapper>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
					<h1>test</h1>
				</Main>
			</Container>
		</ThemeProvider>
	);
};
