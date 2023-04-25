import React from 'react';
import { GitHub, Instagram, Twitter, Linkedin, Gitlab } from 'react-feather';
import { SocialContainer } from './HoveringBannerStyles';

function Icons() {
	return (
		<SocialContainer>
			<a href="https://www.w3schools.com" target="_blank">
				<GitHub className="icon" classNamne="gitgit" />
			</a>
			<a href="https://www.w3schools.com" target="_blank">
				<Instagram className="icon" />
			</a>

			<a href="https://www.w3schools.com" target="_blank">
				<Twitter className="icon" />
			</a>
			<a href="https://www.w3schools.com" target="_blank">
				<Linkedin className="icon" />
			</a>
			<a href="https://www.w3schools.com" target="_blank">
				<Gitlab className="icon" />
			</a>
		</SocialContainer>
	);
}

export default Icons;
