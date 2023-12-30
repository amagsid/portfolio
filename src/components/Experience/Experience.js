import React, { useContext, useState } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAdobe } from 'react-icons/fa';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Example } from '../../elements/Accordion/Accordion';
import Timeline from '../TimeLine/TimeLine';
import {
  ExperienceListItem,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './ExperienceStyles';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { ThemeContext } from '../../pages/_app';

const Experience = () => {
  return (
    <Section id='experience'>
      <MovingSectionTitle sectionTitle='EXPERIENCE' />
      <Timeline />
      <Example />
    </Section>
  );
};

export default Experience;
