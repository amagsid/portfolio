const lightestNavy = '#233554';
const lightestSlate = '#ccd6f6';

export default {
	// Temp fonts
	fonts: {
		title: 'Fjalla One, sans-serif',
		main: 'Space Grotesk, sans-serif',
		mono: 'Noto Sans Mono, monospace',
	},
	// Colors for layout
	colors: {
		navItems: '#ccd6f6',
		horizontlLine: lightestNavy,
		bgMain: '#0a192f',
		links: '#64ffda', //links and nav numbers
		colorPop: '#64ffda', //links and nav numbers
		heading: '#ccd6f6',
		secondaryHeading: '#8892b0',
		paragraphHeading: '#8892b0',
		buttonText: '#0a192f',

		paleGreen: '#b0ddd2',
		inputField: '#233044',

		slate: '#8892b0', //secondary title
		lightestSlate: '#ccd6f6', //main title

		// accent1: 'hsl(34.9,98.6%,72.9%)',
		// button: 'hsl(205.1,100%,36.1%)',
		// background2: 'hsl(232.7,27.3%,23.7%)',
	},
	// Breakpoints for responsive design
	breakpoints: {
		iPoneX: 'screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)',
		sm: 'screen and (max-width: 640px)',
		md: 'screen and (max-width: 768px)',
		lg: 'screen and (max-width: 1024px)',
		xl: 'screen and (min-width: 1280px)',
		xxl: 'screen and (min-width: 1800px)',
	},
};
