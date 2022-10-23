import { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { darkTheme, lightTheme } from '../utils/theme';

import { Home, SignIn, Video, Search } from '../pages';
import { Sidebar, Navbar, Burger } from '../components';

import { AppContainer, AppMain, AppWrapper } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);
	const [open, setOpen] = useState(false);
	const burgerCloseRef = useRef(null);
	const overlayRef = useRef(null);

	const { error: userError, errorMessage: userErrorMessage } = useSelector((state) => state.user);
	const { error: videoError, errorMessage: videoErrorMessage } = useSelector(
		(state) => state.video
	);

	useOnClickOutside(overlayRef, () => setOpen(false));

	const currentTheme = isDarkMode ? darkTheme : lightTheme;

	const changeThemeMode = useCallback(() => {
		localStorage.getItem('tube_theme') === 'dark'
			? localStorage.setItem('tube_theme', 'light')
			: localStorage.setItem('tube_theme', 'dark');

		setDarkMode((mode) => !mode);
	}, []);

	useEffect(() => {
		localStorage.getItem('tube_theme') === 'dark' ? setDarkMode(true) : setDarkMode(false);
	}, []);

	useEffect(() => {
		userError && toast.error(userErrorMessage);
		videoError && toast.error(videoErrorMessage);
	}, [userError, userErrorMessage, videoError, videoErrorMessage]);

	return (
		<ThemeProvider theme={currentTheme}>
			<AppContainer>
				<Sidebar changeTheme={changeThemeMode} isDarkMode={isDarkMode} open={open}>
					<Burger
						open={open}
						setOpen={setOpen}
						overlayRef={overlayRef}
						burgerRef={burgerCloseRef}
					/>
				</Sidebar>
				<AppMain overlay={open} ref={overlayRef}>
					<Navbar>
						<Burger setOpen={setOpen} />
					</Navbar>
					<AppWrapper overlay={open}>
						<Routes>
							<Route path='/'>
								<Route index element={<Home pageType={'random'} />} />
								<Route path='hot' element={<Home pageType={'hot'} />} />
								<Route path='subscriptions' element={<Home pageType={'subscriptions'} />} />
								<Route path='signin' element={<SignIn />} />
								<Route path='video'>
									<Route path=':id' element={<Video />} />
								</Route>
								<Route path='search' element={<Search />} />
							</Route>
						</Routes>
					</AppWrapper>
				</AppMain>
				<ToastContainer
					position='bottom-right'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
					theme='dark'
				/>
			</AppContainer>
		</ThemeProvider>
	);
};
