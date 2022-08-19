import { Person, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import { Button, Container, Input, Search, Wrapper } from './Navbar.styled';

export const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder='Search' />
					<SearchOutlined />
				</Search>
				<Button>
					<Person />
					SIGN IN
				</Button>
			</Wrapper>
		</Container>
	);
};
