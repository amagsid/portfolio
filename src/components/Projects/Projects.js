import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    {/* <SectionDivider /> */}
    <SectionTitle main>Projects</SectionTitle>

    {/* <div className='card-anim transition'>
      <h2 className='transition card-h2'>Awesome Headline</h2>
      <p className='card-parag'>
        Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla
        non metus auctor fringilla.
      </p>
      <div className='cta-container transition'>
        <a href='#' className='cta'>
          Call to action
        </a>
      </div>
      <div className='card_circle transition'></div>
    </div> */}

    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo> {description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}> {tag}</Tag>
                ))}
              </TagList>
            </div>
            {/* <UtilityList> */}
            <div className='d-grid gap-2'>
              <Button
                variant='outline-info'
                size='lg'
                href={source}
                target='_blank'
              >
                Source code
              </Button>
              <Button
                variant='outline-light'
                size='lg'
                href={visit}
                target='_blank'
              >
                Live demo
              </Button>
            </div>
            {/* <ExternalLinks href={visit}>source code</ExternalLinks>
              <ExternalLinks href={source}>Live Demo</ExternalLinks> */}
            {/* </UtilityList> */}
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
