import React, { useState, useCallback, useEffect } from 'react';
// import CV from '../../constants/CV.pdf';
import Radium, { StyleRoot } from 'radium';
import { AnimatePresence, motion, useAnimation, useTransform, useScroll } from 'framer-motion';
import { Section, HighlightedText } from '../../styles/GlobalComponents';
import { BigHeading, HeroWrapper, MedHeading } from './HeroStyles';

const NameAnimation = {
	hover: {
		y: -290,
		scale: 2,
	},
	initial: {
		y: 0,
		scale: 1,
	},
};

const Hero = () => {
	const { scrollY, scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 4], [1, 50]);

	//hoverstate
	// const [isHovered, setIsHovered] = useState(false);
	// function handleMouseEnter() {
	// 	setIsHovered(true);
	// }

	// function handleMouseLeave() {
	// 	setIsHovered(false);
	// }
	const greetings = ['Hello', 'Hola', 'CIAO', 'أهلاً'];
	const [newGreeting, setnewGreeting] = useState('');
	let count = 0;

	const shuffle = useCallback(() => {
		setnewGreeting(greetings[count]);
		count++;
		if (count === greetings.length) {
			count = 0;
		}
	}, []);

	useEffect(() => {
		const intervalID = setInterval(shuffle, 500);
		return () => clearInterval(intervalID);
	}, [shuffle]);

	return (
		<StyleRoot>
			<Section main nopadding>
				<HeroWrapper
					// onMouseEnter={handleMouseEnter}
					// onMouseLeave={handleMouseLeave}
					style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}
				>
					<motion.div>
						{newGreeting == '' && (
							<BigHeading
								style={{
									fontFamily: 'Poppins',
									fontWeight: 700,
									textAlign: 'center',
								}}
							>
								{' '}
								Hello
							</BigHeading>
						)}
						{newGreeting == 'Hello' && (
							<BigHeading
								style={{
									fontFamily: 'Poppins',
									fontWeight: 700,
									textAlign: 'center',
								}}
							>
								Hello
							</BigHeading>
						)}
						{newGreeting == 'Hola' && (
							<BigHeading
								style={{
									fontFamily: 'Poppins',
									fontWeight: 100,
									fontStyle: 'italic',
									textAlign: 'center',
								}}
							>
								Hola
							</BigHeading>
						)}
						{newGreeting == 'CIAO' && (
							<BigHeading style={{ fontFamily: 'Chivo', textAlign: 'center' }}>
								CIAO
							</BigHeading>
						)}
						{newGreeting == 'أهلاً' && (
							<BigHeading
								style={{
									fontFamily: 'Cairo',
									textAlign: 'center',
									fontWeight: 800,
								}}
							>
								أهلاً
							</BigHeading>
						)}
					</motion.div>

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<HighlightedText main>my name is</HighlightedText>
						<MedHeading
							style={{
								scale,
								zIndex: 100,
								position: 'relative',
							}}
							// variants={NameAnimation}
							// animate={isHovered ? 'hover' : 'initial'}
							// transition={{ delay: 0.3 }}
						>
							Ahmad Magdy.
						</MedHeading>
					</div>
				</HeroWrapper>
			</Section>
		</StyleRoot>
	);
};

export default Hero;
