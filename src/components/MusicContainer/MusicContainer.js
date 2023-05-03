import React from 'react';
import { motion } from 'framer-motion';
import { HighlightedText } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';

function MusicContainer() {
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
	return (
		<div style={{ width: '100%' }}>
			<MovingSectionTitle sectionTitle="NOW (PROBABLY) LISTENING TO"></MovingSectionTitle>
			<div className="music-container">
				<div className={'songs-container'}>
					<h4> songs</h4>
					<ul className={'music-list'}>
						{music.map((i) => {
							return (
								<li className={'music-list-item'}>
									<h4>{i.song} </h4>
									<h4>{i.artist} </h4>
									<img src={i.image} alt={i.image} width="20" height="20"></img>
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
									<img src={i.image} alt={i.image} width="20" height="20"></img>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MusicContainer;
