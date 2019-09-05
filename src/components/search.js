import React from 'react';

const Search = (props) => {
  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          placeholder="Searh for podcast"
          onChange={props.handleInput}
        />
        <button
          onClick={props.handleButton}
          type="button"
        > Search
        </button>
      </form>
    </div>
  );
}
 
export default Search;