import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HoveringBanner from '../components/HoveringBanner/HoveringBanner';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<HoveringBanner
				position="right"
				content="amagsid@gmail.com"
				orientation="vertical"
				style={{ display: 'flex', flexDirection: 'column' }}
			/>
			<HoveringBanner position="left" content="icons" />

			<Footer />
		</Container>
	);
};
