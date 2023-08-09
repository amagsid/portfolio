import React, { useState, useContext, useEffect, useRef } from 'react';
import Radium, { StyleRoot } from 'radium';
import useBreakpoints from '../../hooks/useMediaQueryIndex';
import { motion, useTransform, useScroll, useDragControls, useMotionValue } from 'framer-motion';
import { Section, HighlightedText } from '../../styles/GlobalComponents';
import { BigHeading, MedHeading, DragMeSection } from './HeroStyles';
import PhoneHero from './PhoneHero';
import { ThemeContext } from '../../pages/_app';
import SwipeLeftRight from '../../elements/swipeLeftRight';

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
	const scale = useTransform(x, [-550, 0, 550], [1.3, 1, 1.3]);
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
					[
						'#d7ec66',
						'#d7ec66',
						'#FC7273',
						// '#1e1b4b'
						'#2C1438',
						'#FC7273',
						'#d7ec66',
						'#d7ec66',
					]
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
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									position: 'fixed',
								}}
							>
								{/* <motion.div style={{ scale: greetingScale }}> */}
								<div onPointerDown={startDrag} style={{ touchAction: 'none' }} />
								{!isDragging && <SwipeLeftRight></SwipeLeftRight>}

								<motion.div whileHover={{ scale: 1.05 }}>
									<DragMeSection
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
											<div>
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
												{/* <span style={{ color: 'grey' }}> pronounced Ahlan</span> */}
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
												{/* <span style={{ color: 'grey' }}> pronounced Ahlan</span> */}
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
