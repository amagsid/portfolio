import React, { useState, useEffect, useRef } from 'react';
import Ticker from 'framer-motion-ticker';
import { motion } from 'framer-motion';
import Bol from '../../../public/images/bol.png';
import BDC from '../../../public/images/BDC.png';
import BDCSerenity from '../../../public/images/BDCSerenity.png';
import SqSp from '../../../public/images/SqSp.png';

import { StyledImage, SlideShowContainer } from './SlideShowStyles';
import { CloudLightning } from 'react-feather';

function Slides() {
	let colors = [
		{
			name: 'BDC',
			img: BDC,
			hovered: false,
		},
		{
			name: 'bol',
			img: Bol,
			hovered: false,
		},

		{
			name: 'bol',
			img: BDCSerenity,
			hovered: false,
		},
		{
			name: 'SqSp',
			img: SqSp,
			hovered: false,
		},
	];

	const [isHovered, setHovered] = useState(false);
	const [isImgHovered, setImgHovered] = useState(null);
	const [duration, setDuration] = useState(40);

	const ref = useRef(null);

	useEffect(() => {
		const handleDurationIn = () => {
			setDuration(80);
		};
		const handleDurationOut = () => {
			setDuration(30);
		};

		ref.current.addEventListener('mouseenter', handleDurationIn);
		ref.current.addEventListener('mouseleave', handleDurationOut);
	}, [duration]);

	return (
		<SlideShowContainer ref={ref}>
			<Ticker duration={duration}>
				{colors.map((item, index) => {
					return (
						<StyledImage
							key={index}
							onMouseEnter={() => {
								setImgHovered(index);
								setHovered(true);
							}}
							onMouseLeave={() => {
								setHovered(false);
								setImgHovered(null);
							}}
							src={item.img}
							style={{
								filter: isImgHovered == index ? 'saturate(.9)' : 'saturate(.5)',
							}}
							// style={{ width: '100%' }}
							// className=" h-auto lg:max-w-[350px]  object-cover shadow-l dark:shadow-gray-800"
						/>
					);
				})}
			</Ticker>
		</SlideShowContainer>
	);
}

export default Slides;
