import React from 'react';

const FilterButtons = ({ filterStatus, menuStatus }) => {
  return (
    <div className='m-4'>
      {menuStatus.map((id, Status) => {
        return (
          <button
            key={id}
            onClick={() => filterStatus(Status)}
            className="overflow-hidden text-white odd:bg-red-800 even:bg-green-700 text-sm px-4 py-2 rounded-lg group mr-2 font-bold">
            {Status ? "Active" : "Inactive"}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;