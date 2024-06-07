import React from 'react';

const FilterButtons = ({ filterStatus, menuStatus }) => {
  return (
    <div className='m-4'>
      {menuStatus.map((id, Status) => {
        return (
          <button
            key={id}
            onClick={() => filterStatus(Status)}
            className="overflow-hidden text-white dark:bg-indigo-800 dark:border-indigo-700 odd:bg-white even:bg-red-50 odd:dark:bg-indigo-800 even:dark:bg-red-700 text-sm px-4 py-2 rounded-lg group mr-2 font-bold">
            {Status ? "Active" : "Inactive"}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;