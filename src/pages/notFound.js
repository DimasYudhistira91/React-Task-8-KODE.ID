import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import Search from '../components/search';

const NotFound = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <Search/>
      <h3>This Page is Not Found.</h3>
    </div>
  );
}
 
export default NotFound;