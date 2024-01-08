import React, { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../../pages/_app';
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion';

import { useInView } from 'framer-motion';

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
  CarouselItemExperience,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

import { experienceTitleStyle } from './TimeLineStyles';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const TimeLine = () => {
  const { scrollYProgress } = useScroll();
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const { theme } = useContext(ThemeContext);

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

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
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const exoerienceAnimation = {
    hidden: { scale: 1, translateX: -50, opacity: 0 },
    visible: { scale: 1, translateX: 0, opacity: 1 },
  };
  const containerAnimation = {
    visible: {
      scale: 1,

      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 200,
        ease: [0.17, 0.67, 0.83, 0.67],
        staggerChildren: 0.09,
        delayChildren: 0.4,
      },
    },

    hidden: { scale: 1 },
  };

  const listItem = {
    hidden: { scale: 0, y: -20, opacity: 1 },
    visible: { scale: 1, y: 0, opacity: 1 },
  };

  useEffect(() => {}, [isInView]);

  const fontColor =
    theme == 'dark'
      ? useTransform(
          scrollYProgress,
          [0, 0.4, 0.8, 1],
          ['#ccd6f6', '#ccd6f6', '#64ffda', '#ccd6f6']
        )
      : useTransform(
          scrollYProgress,
          [0, 0.4, 0.8, 1],
          ['#ccd6f6', '#191911', '#FF3333', '#191911']
        );

  return (
    <>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={exoerienceAnimation}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width='208'
                    height='6'
                    viewBox='0 0 208 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                      fill='url(#paint0_linear)'
                      fill-opacity='0.33'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear'
                        x1='-4.30412e-10'
                        y1='0.5'
                        x2='208'
                        y2='0.500295'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='white' />
                        <stop
                          offset='0.79478'
                          stop-color='white'
                          stop-opacity='0'
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>

                {/* <motion.div
									// ref={ref}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: false }}
									transition={{ duration: 0.3 }}
									variants={containerAnimation}
								>
									<CarouselItemExperience variants={listItem}>
										{item.experience[0]}
									</CarouselItemExperience>

									<CarouselItemExperience variants={listItem}>
										{item.experience[1]}
									</CarouselItemExperience>
								</motion.div> */}

                <motion.div
                  // ref={ref}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  variants={containerAnimation}
                >
                  {/* <motion.ul style={{ padding: '0' }}> */}
                  <CarouselItemExperience
                    style={{ color: fontColor }}
                    variants={listItem}
                  >
                    {item.experience[0]}
                  </CarouselItemExperience>

                  <CarouselItemExperience
                    style={{ color: fontColor }}
                    variants={listItem}
                  >
                    {item.experience[1]}
                  </CarouselItemExperience>

                  {/* {item.experience.map((i) => (
											<CarouselItemExperience
												key={i}
												variants={listItem}
												ref={ref}
											>
												{i}
											</CarouselItemExperience>
										))} */}
                  {/* </motion.ul> */}
                </motion.div>

                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </>
  );
};

export default TimeLine;
