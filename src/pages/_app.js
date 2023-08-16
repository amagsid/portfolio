import Theme from '../styles/theme';
import styles from '../components/Header/header.css';
import styles2 from '../components/HoveringBanner/Socialicons.css';
import confetti from '../elements/confetti/confettiStyles.css';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';
import Signature from '../../../portfolio_website/public/images/Signature';

import { createContext } from 'react';

export const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState('dark');
	const [loading, setLoading] = useState(true);

	const toggleTheme = () => {
		setTheme((curr) => (curr == 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Theme>{loading ? <Signature /> : <Component {...pageProps} />}</Theme>
		</ThemeContext.Provider>
	);
}
