import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { Sidebar, Navbar, Burger } from '../components';
import { darkTheme, lightTheme } from '../utils/theme';
import { AppContainer, AppMain, AppWrapper } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Home, SignIn, Video, Search } from '../pages';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);
	const [open, setOpen] = useState(false);
	const burgerRef = useRef(null);
	const { error, errorMessage } = useSelector((state) => state.user);

	const currentTheme = isDarkMode ? darkTheme : lightTheme;

	useOnClickOutside(burgerRef, () => setOpen(false));

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
		if (error) {
			toast.error(errorMessage);
		}
	}, [error, errorMessage]);

	return (
		<ThemeProvider theme={currentTheme}>
			<Sidebar changeTheme={changeThemeMode} isDarkMode={isDarkMode} open={open} />
			<AppContainer>
				<AppMain>
					<Navbar>
						<Burger open={open} setOpen={setOpen} burgerRef={burgerRef} />
					</Navbar>
					<AppWrapper>
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
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
			</AppContainer>
		</ThemeProvider>
	);
};
