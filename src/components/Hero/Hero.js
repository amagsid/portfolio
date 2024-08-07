import React, { useState, useContext, useEffect, useRef } from 'react';
import useBreakpoints from '../../hooks/useMediaQueryIndex';
import { CirclePointer } from '../../layout/LayoutStyles';

import Greeting from './Greeting';
import {
    motion,
    useTransform,
    useScroll,
    AnimatePresence,
    useDragControls,
    useMotionValue,
} from 'framer-motion';
import { Section } from '../../styles/GlobalComponents';
import {
    MedHeading,
    DragMePromptContainer,
    DragMePromptText,
    Iam,
    Title,
} from './HeroStyles';
import PhoneHero from './PhoneHero';
import { ThemeContext } from '../../pages/_app';
import { createContext } from 'react';
import Button from '../../elements/Button/Button';
import { useInView } from 'react-intersection-observer';

// export const HoverContext = createContext();

const Hero = (props) => {
    const [isHovered, setHovered] = useState(false);
    const { isSm, isMd, isLg, active } = useBreakpoints();

    const container = {
        hidden: { opacity: 0.1 },
        show: {
            opacity: 1,
            transition: {
                delay: 0.03,
            },
        },
    };

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        // rootMargin: '600px',
    });

    //parallex scroll animation
    const scrollTarget = useRef();

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['end end', 'end start'],
    });

    console.log(scrollYProgress, 'scrollYProgress');
    const greetingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const buttonsScale = useTransform(scrollYProgress, [0.0, 0.2], [1, 0.75]);
    const button1Movement = useTransform(
        scrollYProgress,
        [0.0, 0.2],
        [0, 1255]
    );
    const button2Movement = useTransform(
        scrollYProgress,
        [0.0, 0.2],
        [0, -1255]
    );
    const nameScale = useTransform(scrollYProgress, [0.28, 0.4], [1, 0.0]);
    const greetingScale = useTransform(scrollYProgress, [0.54, 0.65], [1, 0.0]);
    const nameOpacity = useTransform(scrollYProgress, [0, 0.27], [1, 0]);
    const titleColor = useTransform(
        scrollYProgress,
        [0, 0.5],
        ['#ccd6f6', '#64ffda']
    );

    //cusotm cursor
    const handleDragPromptHoverIn = (e) => {
        setHovered(true);
    };
    const handleDragPromptHoverOut = (e) => {
        setHovered(false);
    };

    useEffect(() => {
        let cursor = document.querySelector('.custom-cursor');

        const handleMouseMove = (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            // window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const divv = document.querySelector('.drag-prompt');

        const handleMouseMove = (e) => {
            if (divv) {
                divv.style.left = e.pageX + 'px';
                divv.style.top = e.pageY + 'px';
            }
        };
        //event listener to moce drag prompt text div
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            {isSm && <PhoneHero></PhoneHero>}
            {!isSm && (
                <div>
                    <DragMePromptContainer className='drag-prompt drag-prompt-in'>
                        <DragMePromptText className='drag-prompt-text'>
                            {' '}
                            drag me{' '}
                        </DragMePromptText>
                    </DragMePromptContainer>
                    <Section
                        ref={scrollTarget}
                        nopadding
                        className='h-screen'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {/* //fix this */}
                        <div
                            style={{
                                position: 'fixed',
                                zIndex: '1',
                            }}
                        >
                            <motion.div
                                style={{ scale: greetingScale }}
                                onMouseEnter={handleDragPromptHoverIn}
                                onMouseLeave={handleDragPromptHoverOut}
                            >
                                <Greeting />
                            </motion.div>

                            <motion.div
                                className='pt-12'
                                style={{
                                    scale: nameScale,
                                }}
                            >
                                <MedHeading
                                    initial={{
                                        fontVariationSettings: `"wght" 200`,
                                    }}
                                    animate={{
                                        fontVariationSettings: `"wght" 400`,
                                        transition: {
                                            duration: 0.3,
                                            delay: 2,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                >
                                    Alex Magdy
                                </MedHeading>
                                <Title>Frontend Engineer</Title>
                            </motion.div>

                            <motion.div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5rem',
                                    scale: buttonsScale,
                                }}
                                className='pt-16'
                            >
                                <motion.div
                                    style={{ translateX: button2Movement }}
                                    className='transition-all'
                                >
                                    <a href='/alex-resume.pdf' target='_blank'>
                                        <Button
                                            type='submit'
                                            width='25rem'
                                            title={[
                                                'M',
                                                'Y',
                                                '',
                                                '',
                                                'R',
                                                'E',
                                                'S',
                                                'U',
                                                'M',
                                                'E',
                                            ]}
                                        />
                                    </a>
                                </motion.div>
                                <motion.div
                                    style={{ translateX: button1Movement }}
                                    className='transition-all'
                                    onClick={() =>
                                        (document.location.href =
                                            'https://www.ahmad-magdy.com/')
                                    }
                                >
                                    <a href='https://www.ahmad-magdy.com/#projects'>
                                        <Button
                                            width='25rem'
                                            title={[
                                                'P',
                                                'R',
                                                'O',
                                                'J',
                                                'E',
                                                'C',
                                                'T',
                                                'S',
                                            ]}
                                        />
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </Section>
                </div>
            )}
        </div>
    );
};

export default Hero;
