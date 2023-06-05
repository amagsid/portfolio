import React, { useRef, useState, useEffect } from 'react';
import {
	motion,
	useScroll,
	useTransform,
	useAnimation,
	useMotionTemplate,
	useMotionValue,
} from 'framer-motion';
import { HighlightedText, Section } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { useInView } from 'react-intersection-observer';

function MusicContainer(props) {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ clientX, clientY, currentTarget }) {
		let { left, top } = currentTarget.getBoundingClientRect();
		let xPosition = clientX - left;
		let YPosition = clientY - top;

		// setMousePosition({ x: xPosition, y: YPosition });
		mouseX.set(xPosition);
		mouseY.set(YPosition);
	}
	const music = [
		{
			song: 'Adore You',
			artist: 'Harry Styles',
			image: 'songartwork.jpeg',
		},
		{
			song: 'Blining Lights',
			artist: 'The Weeknd',
			image: 'songartwork.jeg',
		},
		{
			song: 'As it Was',
			artist: 'Harry Styles',
			image: 'songartwork.jpeg',
		},
		{ song: 'The Runner', artist: 'Foals', image: 'songartwork.jpeg' },
	];

	//parallex scroll animation
	const targetRef = useRef();

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});

	const containerColor1 = useTransform(scrollYProgress, [0, 0.3], ['#fc3c44', '#FB4776']);
	const containerColor2 = useTransform(scrollYProgress, [0, 0.3], ['#fa57c1', '#fc3c44']);
	const containerColor3 = useTransform(scrollYProgress, [0, 0.4], ['#fc3c44', '#fa57c1']);

	const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 0.6]);

	//initiate animation when in view
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const musicContainerVariants = {
		visible: {
			backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'],
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				type: 'spring',
				stiffness: 200,
				ease: [0.17, 0.67, 0.83, 0.67],
			},
		},
		hidden: { opacity: 0, scale: 0 },
	};

	return (
		<Section
			style={{
				// position: 'sticky',
				top: 0,
			}}
		>
			<div style={{ width: '100%' }}>
				<MovingSectionTitle sectionTitle="NOW LISTENING TO"></MovingSectionTitle>
				<motion.div
					// ref={ref}
					ref={targetRef}
					onMouseMove={handleMouseMove}
					style={{
						// paddingTop: '0px',
						border: '10xpx solid red',
						borderRadius: '30px',
						borderImage: useMotionTemplate`linear-gradient(90deg, red, yellow) 1`,
						background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, ${containerColor2} 10%, ${containerColor1} 60%, ${containerColor3} 100% )`,

						backdropFilter: 'blur(10px)',
						WebkitBackdropFilter: blur('10px'),
						scale,
					}}
					// animate={controls}
					// initial="hidden"
					// variants={musicContainerVariants}
					// animate={{ backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'] }}
				>
					{/* <motion.div
						style={{
							borderImage: useMotionTemplate`linear-gradient(90deg, ${containerColor1}, ${containerColor2}, ${containerColor3}, ${containerColor23}) 1`,
						}}
					> */}
					<div className="music-container">
						<div className={'songs-container'}>
							<h4> songs</h4>
							<ul className={'music-list'}>
								{music.map((i) => {
									return (
										<li className={'music-list-item'}>
											<h4>{i.song} </h4>
											<h4>{i.artist} </h4>
											<img
												src={i.image}
												alt={i.image}
												width="20"
												height="20"
											></img>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="playlist-container">
							<h4> playlists</h4>
							<ul className={'music-list'}>
								{music.map((i) => {
									return (
										<li className={'music-list-item'}>
											<h4>{i.song} </h4>
											<h4>{i.artist} </h4>
											<img
												src={i.image}
												alt={i.image}
												width="20"
												height="20"
											></img>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</motion.div>
				{/* </motion.div> */}
			</div>
		</Section>
	);
}

export default MusicContainer;
