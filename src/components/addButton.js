import React from 'react';
import './addButton.css';

const AddButton = (props) => {
  return (
    <button
    onClick={props.handleNewButton}
    className='float'>
      +
    </button>
  );
}
 
export default AddButton;