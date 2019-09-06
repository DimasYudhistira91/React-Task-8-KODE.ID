import React, { Component } from 'react';
import { css } from 'emotion';

class Header extends Component {
  constructor() {
    super();
    console.log('header constructor');
  }
  componentDidMount() {
    console.log('header did mount')
  }

  shouldComponentUpdate() {
    console.log('should header update?')
    return true;
  }
  componentDidUpdate() {
    console.log('header did update');
  }

  render() {
    console.log('render')

    const logoCss = css({
      fontSize: '3em',
      color: '#0c9'
    });

    return (
      <h1 className={logoCss}>
        PodSpace
      </h1>
    );
  }
}
 
export default Header;