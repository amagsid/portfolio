import { ThemeProvider } from 'styled-components';

import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

import GlobalStyles from './globals';
import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

function Theme({ children }) {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
}

export default Theme;
