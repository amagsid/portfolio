import React from 'react';
import { GitHub, Instagram, Twitter, Linkedin, Gitlab } from 'react-feather';
import { SocialContainer } from './HoveringBannerStyles';

function Icons() {
	return (
		<SocialContainer>
			<GitHub className="icon" color="white" classNamne="gitgit" />
			<Instagram className="icon" color="white" />
			<Twitter className="icon" color="white" />
			<Linkedin className="icon" color="white" />
			<Gitlab className="icon" color="white" />
		</SocialContainer>
	);
}

export default Icons;
