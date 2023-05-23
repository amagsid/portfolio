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

	//parallex scroll animation
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const nameScale = useTransform(scrollYProgress, [0, 0.8], [0.8, 2.9]);
	const greetingScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
	const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ['-15px', '30px']);
	const greetingYposition = useTransform(scrollYProgress, [0, 0.7], ['0px', '-300px']);

	const myNameIsYposition = useTransform(scrollYProgress, [0, 1], [0, 0]);

	const titleColor = useTransform(scrollYProgress, [0, 0.5], ['#ccd6f6', '#64ffda']);

	return (
		<StyleRoot>
			<motion.div
				style={{
					opacity: opacity,
				}}
			>
				<Section
					ref={targetRef}
					nopadding
					style={{
						height: '88vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						// backgroundColor: 'red',
					}}
				>
					<motion.div style={{ scale: greetingScale, position: 'fixed' }}>
						<motion.div>
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
						</motion.div>
					</motion.div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							paddingTop: '185px',
							position: 'fixed',
						}}
					>
						<HighlightedText main style={{ translateY: myNameIsYposition }}>
							my name is
						</HighlightedText>
						<MedHeading
							style={{
								letterSpacing,
								scale: nameScale,
								position: 'relative',
								color: titleColor,
								// translateY: greetingYposition,
							}}
						>
							Ahmad Magdy
						</MedHeading>
					</div>
				</Section>
			</motion.div>
		</StyleRoot>
	);
};

export default Hero;
