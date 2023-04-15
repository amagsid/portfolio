import React from 'react';
import { Banner, Line, Container } from './HoveringBannerStyles';

const HoveringBanner = (props) => {
	return (
		<Banner position={props.position}>
			<div
				className="pb-5"
				style={{ writingMode: props.orientation == 'vertical' ? 'vertical-rl' : 'none' }}
			>
				{props.content}
			</div>
			<Line className="lineee"> </Line>
		</Banner>
	);
};

export default HoveringBanner;
