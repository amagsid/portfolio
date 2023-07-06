import { ThemeProvider } from 'styled-components';

import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

import GlobalStyles from './globals';
import ButtonStyles from './buttonStyles';
import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

function Theme({ children }) {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
			<GlobalStyles />
			<ButtonStyles />
			{children}
		</ThemeProvider>
	);
}

export default Theme;
