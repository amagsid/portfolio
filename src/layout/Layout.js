import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HoveringBanners from '../components/HoveringBanner/HoveringBanner';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<HoveringBanners />
			<Footer />
		</Container>
	);
};
