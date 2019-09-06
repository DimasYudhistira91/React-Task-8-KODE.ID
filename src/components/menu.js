import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
  <div>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </div>
);

export default Menu;