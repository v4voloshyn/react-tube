import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 25px 20px;
	padding: 20px;
	@media (max-width: 767.98px) {
		gap: 2px 15px;
	}
`;
