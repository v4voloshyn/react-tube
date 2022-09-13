import { useCallback, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Sidebar, Navbar, Burger } from '../components';
import { darkTheme, lightTheme } from '../utils/theme';
import { AppContainer, AppMain, AppWrapper } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Home, SignIn, Video } from '../pages';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);
	const [open, setOpen] = useState(false);

	const burgerRef = useRef(null);

	useOnClickOutside(burgerRef, () => setOpen(false));

	const changeThemeMode = useCallback(() => {
		setDarkMode((mode) => !mode);
	}, []);

	const currentTheme = isDarkMode ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={currentTheme}>
			<Sidebar
				changeTheme={changeThemeMode}
				//menuRef={menuRef}
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
								<Route index element={<Home type={'random'} />} />
								<Route path='hot' element={<Home type={'hot'} />} />
								<Route path='subscriptions' element={<Home type={'subscriptions'} />} />
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
