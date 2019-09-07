import React from 'react';
import PropTypes from 'prop-types';

const calculateDiscount = (items) => {
  return (items / 4) * 100;
}

const Total = (props) => {
  return (
    <div>
      <h2>Total Item: {props.numberOfItems}</h2>
      <h3>Discount: {calculateDiscount(props.numberOfItems)}%</h3>
    </div>
  );
}

Total.propTypes = {
  numberOfItems: PropTypes.number
}
 
export default Total;