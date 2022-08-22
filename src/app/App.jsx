import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Sidebar, Navbar } from '../components';
import { darkTheme, lightTheme } from '../utils/theme';
import { AppContainer, AppMain, AppWrapper } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Home, SignIn, Video } from '../pages';

export const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);
	const changeThemeMode = useCallback(() => {
		setDarkMode((mode) => !mode);
	}, []);

	const currentTheme = isDarkMode ? darkTheme : lightTheme;
	return (
		<ThemeProvider theme={currentTheme}>
			<AppContainer>
				<Sidebar changeTheme={changeThemeMode} isDarkMode={isDarkMode} />
				<AppMain>
					<Navbar />
					<AppWrapper>
						<Routes>
							<Route path='/'>
								<Route index element={<Home />} />
								<Route path='signin' element={<SignIn />} />
								<Route path='video'>
									<Route path=':id' element={<Video />} />
								</Route>
							</Route>
						</Routes>
					</AppWrapper>
				</AppMain>
			</AppContainer>
		</ThemeProvider>
	);
};
