import React from 'react';

const FilterButtons = ({ filterStatus, menuStatus, resetFilter }) => {
  return (
    <div className='m-4 flex gap-2'>
      <button
        className="overflow-hidden text-white bg-blue-700 text-sm px-4 py-2 rounded-lg group font-bold" onClick={resetFilter}>
        Reset Filter
      </button>
      {menuStatus.map((status, index) => (
        <button
          key={index}
          onClick={() => filterStatus(status)}
          className={`overflow-hidden text-white text-sm px-4 py-2 rounded-lg group font-bold ${status ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {status ? 'Active' : 'Inactive'}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
