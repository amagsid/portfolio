import React, { useEffect, useContext } from 'react';
import { DraggingPromptText } from './HandWritingAnimationStyles';
import { ThemeContext } from '../../pages/_app';

function HandWritingAnimation({ text, color }) {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		var vara = new Vara(
			'#vara-container',
			'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json',
			// 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json',
			// 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json',
			[
				{
					text: 'drag me left or right',
					fontSize: 11,
					strokeWidth: 1.3,
					color,
					duration: 900,
					// x: 10,
					// y: -10,
					// fromCurrentPosition: {
					// 	x: true, // Boolean
					// 	y: true, // Boolean
					// },
					// queued: true,
					delay: 0,
					letterSpacing: 2,
				},
				// {
				// 	text: 'left or right',
				// 	fontSize: 11,
				// 	strokeWidth: 1.5,
				// 	color,
				// 	duration: 1000,
				// 	// x: 10,
				// 	y: 12,
				// 	// fromCurrentPosition: {
				// 	// 	x: true, // Boolean
				// 	// 	y: true, // Boolean
				// 	// },

				// 	delay: 0,
				// 	letterSpacing: 4,
				// },
			]
		);
	}, []);
	return (
		<DraggingPromptText id="vara-container" className="z-[20]"></DraggingPromptText>
		// <div className="handwriting" style={{ position: 'absolute', top: 0 }}>
		// 	{' '}
		// 	<h1 style={{ color: '#fff' }}>drag me </h1>
		// </div>
	);
}

export default HandWritingAnimation;
