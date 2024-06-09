import React from 'react';

const SearchBox = ({ searchfield, searchChange, clearSearch }) => {
  return (
    <div className='m-4 relative'>
      <input
        value={searchfield}
        className='form-control
        w-full
        block
        p-3
        pr-10
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
      {searchfield.length > 0 && (
        <button
          onClick={clearSearch}
          className='absolute inset-y-0 right-0 px-4 py-2 text-red-500 font-semibold ease-in-out transition-all'
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBox;
