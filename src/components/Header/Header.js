import Link from 'next/link';
import React, { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Logo from '../../../public/images/logo-white.png';

import {
	Container,
	LogoContainer,
	NavLinksContainer,
	Number,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

function Header() {
	return (
		<Container>
			<LogoContainer>
				<Link style={{ fontSize: '10px' }} href="/">
					<h4 style={{ color: '#d25276' }}> handwritten signature goes here </h4>
				</Link>
			</LogoContainer>

			<NavLinksContainer>
				<li
				// style={{
				// 	display: 'flex',
				// 	justifyContent: 'center',
				// 	alignItems: 'center',
				// 	flexDirection: 'row',
				// }}
				>
					 <ThemeSwitch />
				</li>
				<li>
					<Link href="#about">
						<NavLink>
							{' '}
							<Number>01. </Number>About
						</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#projects">
						<NavLink>
							<Number>02. </Number>Experience
						</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#tech">
						<NavLink>
							{' '}
							<Number>03. </Number>Work
						</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#tech">
						<NavLink>
							{' '}
							<Number>04. </Number>Contact
						</NavLink>
					</Link>
				</li>
			</NavLinksContainer>
			{/* <Div3>
      <SocialIcons href='https://github.com/amagsid' target='_blank'>
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/ahmad-m-s/'
        target='_blank'
      >
        <AiFillLinkedin size='3rem'></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/isahmad_true' target='_blank'>
        <AiFillTwitterCircle size='3rem'></AiFillTwitterCircle>
      </SocialIcons>
    </Div3> */}
		</Container>
	);
}

export default Header;
