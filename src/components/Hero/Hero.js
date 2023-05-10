import React, { useState, useCallback, useEffect, useRef } from 'react';
// import CV from '../../constants/CV.pdf';
import Radium, { StyleRoot } from 'radium';
import {
	AnimatePresence,
	motion,
	useAnimation,
	useTransform,
	useScroll,
	useMotionValue,
} from 'framer-motion';
import { Section, HighlightedText } from '../../styles/GlobalComponents';
import { BigHeading, HeroWrapper, MedHeading } from './HeroStyles';

const Hero = () => {
	//mouse position and count to set greeting index
	const [mousePos, setMousePos] = useState({});
	const [count, setCount] = useState(0);

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value; //assign the value of ref to the argument
		}, [value]); //this code will run when the value of 'value' changes
		return ref.current; //in the end, return the current ref value.
	}

	const prevxCount = usePrevious(mousePos.x);
	const prevyCount = usePrevious(mousePos.y);

	console.log(prevxCount, mousePos.x);

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};

		if (
			mousePos.x - prevxCount >= 5 ||
			prevxCount - mousePos.x >= 5 ||
			mousePos.y - prevyCount >= 10
		) {
			setCount(count + 1);
		}

		if (count === 4) {
			setCount(0);
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [prevyCount, prevxCount]);

	const container = {
		hidden: { opacity: 0.3 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.06,
			},
		},
	};

	//scroll animation
	const { scrollY, scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 4], [1, 50]);
	const titleColor = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		['#ccd6f6', '#64ffda', '#ccd6f6']
	);

	//hellos
	// const greetings = ['Hello', 'Hola', 'CIAO', 'أهلاً'];
	// const greetingsComponents = [
	// 	{
	// 		greeting: 'Hello',
	// 		style: {
	// 			fontFamily: 'Poppins',
	// 			fontWeight: 700,
	// 			textAlign: 'center',
	// 		},
	// 	},
	// 	{
	// 		greeting: 'Hola',
	// 		style: {
	// 			fontFamily: 'Poppins',
	// 			fontWeight: 100,
	// 			fontStyle: 'italic',
	// 			textAlign: 'center',
	// 		},
	// 	},
	// 	{
	// 		greeting: 'CIAO',
	// 		style: { fontFamily: 'Chivo', textAlign: 'center' },
	// 	},
	// 	{
	// 		greeting: 'أهلاً',
	// 		style: {
	// 			fontFamily: 'Cairo',
	// 			textAlign: 'center',
	// 			fontWeight: 800,
	// 		},
	// 	},
	// ];

	// console.log(mousePos.x, prevCountRef.current.x);

	//changing greetings based on seconds

	// const [newGreeting, setnewGreeting] = useState('');

	// const shuffle = useCallback(() => {
	// 	setnewGreeting(greetings[count]);
	// 	count++;
	// 	if (count === greetings.length) {
	// 		count = 0;
	// 	}
	// }, []);

	// useEffect(() => {
	// 	const intervalID = setInterval(shuffle, 500);
	// 	return () => clearInterval(intervalID);
	// }, [shuffle]);

	return (
		<StyleRoot>
			<Section nopadding style={{ height: '90vh', display: 'flex' }}>
				<HeroWrapper>
					{/* <div
						style={{
							width: 400,
							height: 400,
							// ...props.style,
							display: 'flex',
							placeItems: 'center',
							placeContent: 'center',
							perspective: 400,
						}}
					>
						<motion.div
							style={{
								width: 150,
								height: 150,
								borderRadius: 30,
								backgroundColor: '#fff',
								rotateX: rotateX,
								rotateY: rotateY,
							}}
						/>
					</div> */}

					{/* {
						<BigHeading
							variants={container}
							initial="hidden"
							animate="show"
							style={greetingsComponents[count].style}
						>
							{greetingsComponents[count].greeting}
						</BigHeading>
					} */}
					{/* <h1>
						{' '}
						Now: {mousePos.x}, before: {prevCountRef.current.x}
					</h1> */}

					{/* <motion.div> */}
					{/* {newGreeting == '' && (
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
						)} */}
					{count == 0 && (
						<BigHeading
							variants={container}
							initial="hidden"
							animate="show"
							style={{
								fontFamily: 'Poppins',
								fontWeight: 700,
								textAlign: 'center',
							}}
						>
							Hello
						</BigHeading>
					)}
					{count == 1 && (
						<BigHeading
							variants={container}
							initial="hidden"
							animate="show"
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
					{count == 2 && (
						<BigHeading
							variants={container}
							initial="hidden"
							animate="show"
							style={{ fontFamily: 'Chivo', textAlign: 'center' }}
						>
							CIAO
						</BigHeading>
					)}
					{count == 3 && (
						<BigHeading
							variants={container}
							initial="hidden"
							animate="show"
							style={{
								fontFamily: 'Cairo',
								textAlign: 'center',
								fontWeight: 800,
							}}
						>
							أهلاً
						</BigHeading>
					)}
					{/* </motion.div> */}

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<HighlightedText main>my name is</HighlightedText>
						<MedHeading
							style={{
								scale,
								position: 'relative',
								color: titleColor,
							}}
						>
							Ahmad Magdy
						</MedHeading>
					</div>
				</HeroWrapper>
			</Section>
		</StyleRoot>
	);
};

export default Hero;
