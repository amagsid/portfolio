import React, { useState, useRef, useEffect } from 'react';

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
	SkillsList,
	SkillsListItem,
	ClientsLogoContainer,
} from './TimeLineStyles';
import Logos from '../Logos/logos';
import { Section, SectionText, SectionHeading, Number } from '../../styles/GlobalComponents';
import { Line } from '../../components/HoveringBanner/HoveringBannerStyles';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (window, left) => {
		return window.scrollTo({ left, behavior: 'smooth' });
	};

	const handleClick = (event, i) => {
		if (event && event.preventDefault) {
			event.preventDefault();
		}

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	// // snap back to beginning of scroll when window is resized
	// // avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<Section id="about">
			<Section nopadding row end>
				<Number small>01. </Number>
				<SectionHeading>A little More About Me</SectionHeading>
				<Line s horizontal />
			</Section>
			<SectionText className="mt-5 mb-5">
				Achieving a life-long dream to become a programmer, I'm currently activly looking
				for a junior role that puts me on a professional development journey
			</SectionText>

			<CarouselContainer className="mt-5 mb-5" ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode
							key={index}
							final={index === TOTAL_CAROUSEL_COUNT - 1}
						>
							<CarouselItem
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(event) => handleClick(event.index)}
							>
								<CarouselItemTitle>
									{item.year}

									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fill="url(#paint0_linear)"
											fill-opacity="0.33"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="white" />
												<stop
													offset="0.79478"
													stop-color="white"
													stop-opacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						key={index}
						index={index}
						active={activeItem}
						onClick={(event) => handleClick(event.index)}
						type="button"
					>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>

			<SectionText className="mt-5 mb-5">
				Throughtout my proferssional growth journey, I have gained experience in
			</SectionText>

			<SkillsList>
				<SkillsListItem> React</SkillsListItem>
				<SkillsListItem> React</SkillsListItem>
				<SkillsListItem> React</SkillsListItem>
				<SkillsListItem> React</SkillsListItem>
				<SkillsListItem> React</SkillsListItem>
				<SkillsListItem> React</SkillsListItem>
			</SkillsList>

			<SectionText className="mt-5 mb-5">and had the chance to deliver work for:</SectionText>

			{/* <h1> Booking.com</h1>
				<h1> Uber</h1>
				<h1> Bol.com</h1>
				<h1> SquareSpace</h1> */}
			<Logos></Logos>
		</Section>
	);
};

export default Timeline;
