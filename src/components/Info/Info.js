import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} backgroundImage={settings.info.image}/>
    <p>{settings.info.subtitle}</p>
  </Container>
);

export default Info;
