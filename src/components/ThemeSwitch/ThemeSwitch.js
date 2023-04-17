import React from 'react';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app';
import { Sun, Moon } from 'react-feather';

function ThemeSwitch() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	console.log(Sun, 'sun');
	return (
		<Switch
			onChange={toggleTheme}
			uncheckedIcon={
				<Moon color={theme == 'dark' ? 'white' : 'grey'} className="icon switch-icon" />
			}
			checkedIcon={<Sun className="icon switch-icon" />}
			onColor={'#EEEEEE'}
			height={25}
			width={50}
			handleDiameter={20}
			onHandleColor={'#64ffda'}
			checked={theme === 'light'}
		/>
	);
}

export default ThemeSwitch;
