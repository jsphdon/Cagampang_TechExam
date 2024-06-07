import '../index.css';
import React, { useState, useEffect, useCallback } from 'react';
import SearchBox from './SearchBox';
import TableRowData from './TableRowData';
import FilterButtons from './FilterButtons';


function TableData() {
  const [users, setUsers] = useState([]);
  const [duplicateUsers, setDuplicateUsers] = useState([]);
  const [status, setStatus] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      fetch('http://localhost:8000/users').then(response => {
        return response.json();
      }).then(u => {
        setUsers(u);
        setDuplicateUsers(u)
      });
    } else {
      searchFilter();
    }
  }, [status, search])

  // SEARCH FILTER
  const onSearchChange = useCallback((event) => {
    let target = event.target.value;
    setSearch(target);
  })

  const menuStatus = [...new Set(users.map((stat) => stat.status))];

  // INACTIVE/ACTIVE FILTER
  const filterStatus = useCallback((curStat) => {
    const currentStatus = curStat === 1;
    setStatus(currentStatus);
  });

  // SEARCH AND FILTER FUNCTION
  const searchFilter = () => {

    let newSearch = [];
    if (search === "") {
      newSearch = users;
    } else {
      const dupUsers = users.filter(unfilUsers => {
        return unfilUsers.name.toLowerCase().includes(search.toLowerCase());
      });
      newSearch = dupUsers;
    }
    if (status !== null) {
      const newStat = newSearch.filter((newStatus) => {
        return newStatus.status === status;
      });
      newSearch = newStat;
    }
    setDuplicateUsers(newSearch);

  }

  // Clear Input Function
  const clear = () => {
    setStatus(null);
    setSearch("");
  }

  return (
    <div>
      <div className='flex items-center flex-col sm:flex-row'>
        <div className='flex-1 w-full'>
          <SearchBox searchChange={onSearchChange} searchfield={search} />
        </div>
        <div className='flex text-right'>
          <div className='mt-4 mb-4'>
            <button
              onClick={() => clear()}
              className="overflow-hidden text-white bg-red-700 text-sm px-4 py-2 rounded-lg group mr-4 font-bold">
              Clear Input
            </button>
          </div>
          <FilterButtons filterStatus={filterStatus} menuStatus={menuStatus} />
        </div>
      </div>

      <table className="w-full text-sm text-left text-white ">
        <thead className="text-xs text-black uppercase bg-white border">
          <tr>
            <th scope="col" className="px-6 py-3 border">
              Name
            </th>
            <th scope="col" className="px-6 py-3 border">
              Description
            </th>
            <th scope="col" className="px-6 py-3 border">
              Category
            </th>
            <th scope="col" className="px-6 py-3 border">
              Status
            </th>
            <th scope="col" className="px-6 py-3 border">

            </th>
            <th scope="col" className="px-6 py-3 border">

            </th>
          </tr>
        </thead>

        <TableRowData users={duplicateUsers} />

      </table>
    </div>

  )
}

export default TableData;


