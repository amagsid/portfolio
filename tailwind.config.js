/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		maxWidth: {
			container: '1440px',
			contentContainer: '1140px',
			containerSmall: '1024px',
			containerxs: '768px',
		},
		extend: {
			screens: {
				xs: '320px',
				sm: '640px',
				phonesm: '391px',
				sml: '500px',
				md: '667px',
				mdl: '768px',
				lg: '960px',
				lgl: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [],
};
