import React from 'react';
import { Banner, Line, Container } from './HoveringBannerStyles';
import SocialIcons from './Socialicons';

const HoveringBanner = (props) => {
	return (
		<Banner className="social-container" position={props.position}>
			<div
				className="pb-5"
				style={{
					writingMode: props.orientation == 'vertical' ? 'vertical-rl' : 'horizontal-tb',
				}}
			>
				{props.position == 'left' && <SocialIcons />}
				{props.position == 'right' && (
					<a href="https://www.w3schools.com" target="_blank">
						<h5 className="email-link">amagsid@gmail.com </h5>
					</a>
				)}
			</div>
			<Line> </Line>
		</Banner>
	);
};
const HoveringBanners = () => {
	return (
		<>
			<HoveringBanner
				position="right"
				content="amagsid@gmail.com"
				orientation="vertical"
			></HoveringBanner>
			<HoveringBanner orientation="horizontal" position="left"></HoveringBanner>
		</>
	);
};

export default HoveringBanners;
