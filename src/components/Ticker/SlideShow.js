import React from 'react';
import Ticker from 'framer-motion-ticker';
// import BDC from '../../../public/images/bol.png';
import Bol from '../../../public/images/bol.png';
// import Uber from '../../../public/images/bol.png';
// import SqSp from '../../../public/images/bol.png';

import { StyledImage } from './SlideShowStyles';

function SlideShow() {
	// const colors = ['#632bf3', '#44d3f3', '#632bf3', '#44d3f3', '#632bf3', '#44d3f3'];
	const colors = [
		{
			name: 'bol',
			img: Bol,
		},
	];
	return (
		<Ticker duration={20}>
			{colors.map((item, index) => {
				return (
					<div
						key={index}
						style={{
							backgroundColor: item,
							margin: '5px',
							height: '350px',
							width: '400px',
						}}
					>
						<StyledImage
							src={item.img}
							// className=" h-auto lg:max-w-[350px]  object-cover shadow-l dark:shadow-gray-800"
						/>
					</div>
				);
			})}
		</Ticker>
	);
}

export default SlideShow;
