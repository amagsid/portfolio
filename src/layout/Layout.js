import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HoveringBanners from '../components/HoveringBanner/HoveringBanner';
import FadeIn from 'react-fade-in';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
	return (
		<Container>
			<FadeIn delay={50}>
				<Header />
				<main>{children}</main>
				<HoveringBanners />
				<Footer />
			</FadeIn>
		</Container>
	);
};
