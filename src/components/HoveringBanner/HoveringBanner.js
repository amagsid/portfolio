import React from 'react';
import { Banner, Line, Container } from './HoveringBannerStyles';
import SocialIcons from './Socialicons';

const HoveringBanner = (props) => {
	return (
		<Banner position={props.position}>
			<div
				className="pb-5"
				style={{
					writingMode: props.orientation == 'vertical' ? 'vertical-rl' : 'horizontal-tb',
				}}
			>
				{props.position == 'left' && <SocialIcons />}
				{props.content}
			</div>
			<Line> </Line>
		</Banner>
	);
};
const HoveringBanners = () => {
	return (
		<>
			<HoveringBanner position="right" content="amagsid@gmail.com" orientation="vertical" />
			<HoveringBanner orientation="horizontal" position="left"></HoveringBanner>
		</>
	);
};

export default HoveringBanners;
