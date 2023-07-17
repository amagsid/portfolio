import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Section } from '../../styles/GlobalComponents';
import { BigHeading, MedHeading, DragMeSection } from './HeroStyles';
import { HighlightedText } from '../Hero/PhoneHeroStyles';
import useBreakpoints from '../../hooks/useMediaQueryIndex';
import { motion, useTransform, useScroll, useDragControls } from 'framer-motion';

function PhoneHero() {
	const [mousePos, setMousePos] = useState({});
	const [touchPos, setTouchPos] = useState({});
	const [count, setCount] = useState(0);
	//drag controls
	const divRef = useRef(null);
	const dragControls = useDragControls();
	function startDrag(event) {
		controls.start(event, { snapToCursor: true });
	}

	const prevxCount = usePrevious(mousePos.x);
	const prevyCount = usePrevious(mousePos.y);
	const prevTouchxCount = usePrevious(touchPos.x);
	//parallex scroll animation
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	});

	const greetingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const greetingScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
	const nameOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
	const nameScale = useTransform(scrollYProgress, [0, 0.8], [0.8, 2.9]);

	const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ['-5px', '30px']);

	const myNameIsYposition = useTransform(scrollYProgress, [0, 1], [0, 0]);

	const titleColor = useTransform(scrollYProgress, [0, 0.5], ['#ccd6f6', '#64ffda']);

	useEffect(() => {
		const handleTouch = (event) => {
			setTouchPos({ x: event.clientX, y: event.clientY });
			console.log('touched');
			setCount(count + 1);
		};
		if (count === 4) {
			setCount(0);
		}

		if (
			mousePos.x - prevxCount >= 5 ||
			prevxCount - mousePos.x >= 5 ||
			mousePos.y - prevyCount >= 5
		) {
			setCount(count + 1);
			// setCount((prev) => prev + 1);
		}

		if (count === 4) {
			setCount(0);
		}

		divRef.current.addEventListener('touchmove', handleTouch);

		return () => {
			// window.removeEventListener('touchmove', handleMouseMove);
			// window.removeEventListener('drag', handleDrag);
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
	return (
		<motion.div
			style={{
				opacity: greetingOpacity,
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
				}}
			>
				<motion.div style={{ scale: greetingScale }}>
					<div onPointerDown={startDrag} style={{ touchAction: 'none' }} />

					<DragMeSection
						className="dragme"
						ref={divRef}
						drag="y"
						dragControls={dragControls}
						dragConstraints={{ top: 50, bottom: 50 }}
						dragElastic={0.2}
					>
						<div style={{ color: '#fff' }}> swipe me </div>
						<div>
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
								<BigHeading
									variants={container}
									initial="hidden"
									animate="show"
									style={{
										fontFamily: 'Cairo',
										fontWeight: 800,
									}}
								>
									أهلاً
								</BigHeading>
							)}
						</div>
					</DragMeSection>
				</motion.div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						position: 'sticky',
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
							opacity: nameOpacity,
						}}
					>
						Ahmad Magdy
					</MedHeading>
				</div>
			</Section>
		</motion.div>
	);
}

export default PhoneHero;
