import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
      <input
        className='form-control
        w-full
        block
        p-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none'
        type='search'
        placeholder='Search here'
        onChange={searchChange}
      />
  );
}

export default SearchBox;