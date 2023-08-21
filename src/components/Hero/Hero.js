import React, { useState, useContext, useEffect, useRef } from 'react';
import Radium, { StyleRoot } from 'radium';
import useBreakpoints from '../../hooks/useMediaQueryIndex';
import { motion, useTransform, useScroll, useDragControls, useMotionValue } from 'framer-motion';
import { Section, HighlightedText } from '../../styles/GlobalComponents';
import { BigHeading, MedHeading, DragMeSection, AhlanPhonemic } from './HeroStyles';
import PhoneHero from './PhoneHero';
import { ThemeContext } from '../../pages/_app';
import SwipeLeftRight from '../../elements/swipeLeftRight';
import HandWritingAnimation from '../../elements/Handwriting/HandWritingAnimation';

const Hero = (props) => {
	const { theme } = useContext(ThemeContext);
	//mouse position and count to set greeting index
	const [mousePos, setMousePos] = useState({});
	const [touchPos, setTouchPos] = useState({});
	const [isMouseMoving, setIsMouseMoving] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const [count, setCount] = useState(0);

	const { isSm, isMd, isLg, active } = useBreakpoints();

	//drag controls
	const divRef = useRef(null);
	const dragControls = useDragControls();
	function startDrag(event) {
		controls.start(event, { snapToCursor: true });
	}

	//hero effects based on greeting drag
	const x = useMotionValue(0);
	const dragPromptOpacity = useTransform(x, [0, 500], [1, 0]);
	const input = [-200, 0, 200];
	const output = [0, 1, 0];
	const opacity = useTransform(x, input, output);
	const GreetingLetterSpacing = useTransform(x, [-450, 0, 450], ['-33px', '15px', '-33px']);

	const color =
		theme == 'dark'
			? useTransform(
					x,
					[-550, -150, -100, 0, 100, 150, 500],
					['#64ffda', '#64ffda', '#FC7273', '#ccd6f6', '#FC7273', '#64ffda', '#64ffda']
			  )
			: useTransform(
					x,
					[-550, -150, -100, 0, 100, 150, 500],
					['#FF3333', '#FF3333', '#FC7273', '#191911', '#FC7273', '#FF3333', '#FF3333']
			  );

	const prevxCount = usePrevious(mousePos.x);
	const prevyCount = usePrevious(mousePos.y);
	const prevTouchxCount = usePrevious(touchPos.x);
	const prevTouchyCount = usePrevious(touchPos.y);
	const handleDrag = (event, info) => {
		setIsDragging(true);
	};

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePos({ x: event.clientX, y: event.clientY });
			setIsMouseMoving(true);
		};
		const handleMouseLeave = (event) => {
			setIsMouseMoving(false);
		};

		if (count === 5) {
			setCount(0);
		}

		if (
			mousePos.x - prevxCount >= 5 ||
			prevxCount - mousePos.x >= 5 ||
			mousePos.y - prevyCount >= 5
		) {
			setCount(count + 1);
		}

		if (count === 5) {
			setCount(0);
		}

		if (!isSm) {
			divRef.current.addEventListener('mousemove', handleMouseMove);
			// divRef.current.addEventListener('mouseleave', handleMouseLeave);
			window.addEventListener('drag', handleDrag);
			// window.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			// divRef.current.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [prevxCount, count, prevTouchxCount]);

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value; //assign the value of ref to the argument
		}, [value]); //this code will run when the value of 'value' changes
		return ref.current; //in the end, return the current ref value.
	}

	const container = {
		hidden: { opacity: 0.3 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.04,
			},
		},
	};

	//parallex scroll animation
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	});

	const greetingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const greetingScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.5]);
	const nameOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
	const nameScale = useTransform(scrollYProgress, [0.0, 0.1], [1, 1.4]);

	const letterSpacing = useTransform(scrollYProgress, [0, 0.4], ['-5px', '30px']);

	const myNameIsYposition = useTransform(scrollYProgress, [0, 1], [0, 0]);

	const titleColor = useTransform(scrollYProgress, [0, 0.5], ['#ccd6f6', '#64ffda']);

	return (
		<>
			{isSm && <PhoneHero></PhoneHero>}
			{!isSm && (
				<StyleRoot>
					<motion.div
						style={{
							opacity: greetingOpacity,
							// scale: greetingScale,
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
								position: 'relative',
							}}
						>
							{theme == 'dark' && isMouseMoving && !isDragging && (
								<motion.div style={{ opacity }}>
									<HandWritingAnimation
										text="drag me left or right"
										color="#64ffda"
									>
										{' '}
									</HandWritingAnimation>
								</motion.div>
							)}
							{theme == 'light' && isMouseMoving && !isDragging && (
								<motion.div style={{ opacity }}>
									<HandWritingAnimation
										text="drag me left or right"
										color="#FF3333"
									>
										{' '}
									</HandWritingAnimation>
								</motion.div>
							)}

							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									position: 'fixed',
								}}
							>
								{/* <motion.div style={{ scale: greetingScale }}> */}
								<div onPointerDown={startDrag} style={{ touchAction: 'none' }} />
								{/* {!isDragging && (
									<SwipeLeftRight
										style={{ zIndex: 80, mixBlendMode: 'hard-light' }}
									></SwipeLeftRight>
								)} */}

								<motion.div whileHover={{ scale: 1.05 }}>
									<DragMeSection
										initial={{ x: 0 }}
										animate={{ x: [-500, 0] }}
										transition={{
											type: 'spring',
											bounce: 0.6,
											duration: 1,
											ease: 'easeInOut',
											// repeat: 2,
											repeatType: 'mirror',
											// delay: 1,
										}}
										//
										dragElastic={0.2}
										dragSnapToOrigin={true}
										className="dragme"
										onDragEnd={handleDrag}
										ref={divRef}
										drag="x"
										style={{
											x: x,
											scale: greetingScale,
											cursor: 'grabbing',
											color,
											letterSpacing: GreetingLetterSpacing,
										}}
										dragControls={dragControls}
										dragConstraints={{
											right: 500,
											left: -500,
										}}
										dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
										whileTap={{ scale: 0.9 }}
									>
										{count == 0 && (
											<BigHeading
												variants={container}
												initial="hidden"
												animate="show"
												style={{
													fontFamily: 'Poppins',
													fontWeight: 700,
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
												style={{
													fontFamily: 'Chivo',
													textAlign: 'center',
												}}
											>
												CIAO
											</BigHeading>
										)}
										{count == 3 && (
											<div
												className="ahlan-container"
												style={{ position: 'relative' }}
											>
												<BigHeading
													variants={container}
													initial="hidden"
													animate="show"
													style={{
														fontFamily: 'Cairo',
														fontWeight: 800,
														GreetingLetterSpacing,
													}}
												>
													أهلاً
												</BigHeading>
												{/* <AhlanPhonemic
													className="ahlan"
													style={{ letterSpacing: '1px', scale: 1 }}
												>
													/ahʰlan̪/
												</AhlanPhonemic> */}
											</div>
										)}
										{count == 4 && (
											<div>
												<BigHeading
													variants={container}
													initial="hidden"
													animate="show"
													style={{
														fontFamily: 'Poppins',
														fontWeight: 800,
													}}
												>
													Hoi
												</BigHeading>
											</div>
										)}
									</DragMeSection>
								</motion.div>
								{/* </motion.div> */}
								{/* <div
									style={{
										display: 'flex',
										flexDirection: 'column',

								
									}}
								> */}
								<HighlightedText main style={{ translateY: myNameIsYposition }}>
									my name is
								</HighlightedText>
								<MedHeading
									style={{
										letterSpacing,
										scale: nameScale,
										// position: 'relative',
										// opacity: nameOpacity,
									}}
								>
									Ahmad Magdy
								</MedHeading>
							</div>
							{/* </div> */}
						</Section>
					</motion.div>
				</StyleRoot>
			)}
		</>
	);
};

export default Hero;
