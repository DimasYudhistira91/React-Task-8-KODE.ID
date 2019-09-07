import React from 'react';
import Total from './Total';

const Cart = () => {
  return (
    <div>
      <h2>Ecommerce Cart</h2>
      <Total numberOfItems={2} />
    </div>
  );
}
 
export default Cart;