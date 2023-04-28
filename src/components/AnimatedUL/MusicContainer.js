import React from 'react';
import { motion } from 'framer-motion';
import { HighlightedText } from '../../styles/GlobalComponents';

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
		<motion.div
			whileHover={{ scale: 1.2, originX: 0 }}
			transition={{
				type: 'spring',
				stiffness: 300,
			}}
		>
			<span>
				<HighlightedText> now (probably) listening to </HighlightedText>
			</span>
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
		</motion.div>
	);
}

export default MusicContainer;
