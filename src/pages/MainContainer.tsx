import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from '../components';

import { MainInfoPage } from './MainInfoPage';
const Container = styled.div`
	width: 100%;
	position: relative;
`;

export const MainContainer = () => {
	return (
		<Container>
			<Header />
			<MainInfoPage />
			<Footer />
		</Container>
	);
};
