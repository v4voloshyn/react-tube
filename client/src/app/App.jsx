import { useCallback, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Sidebar, Navbar, Burger } from '../components';
import { darkTheme, lightTheme } from '../utils/theme';
import { AppContainer, AppMain, AppWrapper } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Home, SignIn, Video } from '../pages';
import { useOnClickOutside } from '../hooks/useOnClickOutside ';

export const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);
	const [open, setOpen] = useState(false);

	const burgerRef = useRef(null);
	const menuRef = useRef(null);

	useOnClickOutside(menuRef, burgerRef, () => setOpen(false));

	const changeThemeMode = useCallback(() => {
		setDarkMode((mode) => !mode);
	}, []);

	const currentTheme = isDarkMode ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={currentTheme}>
			<Sidebar
				changeTheme={changeThemeMode}
				menuRef={menuRef}
				isDarkMode={isDarkMode}
				open={open}
			/>
			<AppContainer>
				<AppMain>
					<Navbar>
						<Burger open={open} setOpen={setOpen} burgerRef={burgerRef} />
					</Navbar>
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
