import React from 'react';
import SlideShow from '../Ticker/SlideShow';
import { Section } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import Logos from '../../elements/Logos/logos';
import SlideInCard from '../../elements/SlideInCard/SlideInCard';

const PastWork = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <Section id='pastwork'>
      <MovingSectionTitle sectionTitle='PAST WORK & PROJECTS' />
      <div
        className='carousel'
        style={{
          width: '100%',
          color: 'white',
          textAlign: 'center',
          fontSize: '30px',
        }}
      ></div>
      {/* <SlideShow></SlideShow> */}

      {items.map((item, i) => (
        <SlideInCard key={i} text={item} index={i} />
      ))}

      {/* <Logos> </Logos> */}
    </Section>
  );
};

export default PastWork;
