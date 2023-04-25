import Theme from '../styles/theme';
import styles from '../components/Header/header.css';
import styles2 from '../components/HoveringBanner/Socialicons.css';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

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
			<Theme>{loading ? <Sun /> : <Component {...pageProps} />}</Theme>
		</ThemeContext.Provider>
	);
}
