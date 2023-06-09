import React from 'react';
import Ticker from 'framer-motion-ticker';

function SlideShow() {
	const colors = ['#632bf3', '#44d3f3', '#632bf3', '#44d3f3', '#632bf3', '#44d3f3'];
	return (
		<Ticker duration={40}>
			{colors.map((item, index) => (
				<div
					key={index}
					style={{
						backgroundColor: item,
						margin: '5px',
						height: '350px',
						width: '400px',
					}}
				/>
			))}
		</Ticker>
	);
}

export default SlideShow;
