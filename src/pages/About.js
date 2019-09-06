import React from 'react';
import Search from '../components/search';
import Header from '../components/header';
import Menu from '../components/menu';

const About = props => (
  <React.Fragment>
    <Header/>
    <Menu/>
    <Search/>
    <h1>About</h1>
  </React.Fragment>
);
export default About;