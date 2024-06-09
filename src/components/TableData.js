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
        setDuplicateUsers(u);
      });
    } else {
      searchFilter();
    }
  }, [status, search])

  // SEARCH FILTER
  const onSearchChange = useCallback((event) => {
    let target = event.target.value;
    setSearch(target);
  }, [])

  const menuStatus = [...new Set(users.map((stat) => stat.status))];

  // INACTIVE/ACTIVE FILTER
  const filterStatus = useCallback((curStat) => {
    setStatus(prevStatus => {
      // If current status is null or opposite of current status is clicked, set the opposite status
      if (prevStatus === null || prevStatus !== curStat) {
        return curStat;
      } else { // If the same status is clicked again, reset to null (show all)
        return null;
      }
    });
  }, []);

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
  const clearInput = () => {
    setSearch("");
  }

  const resetFilter = () => {
    setStatus(null);
  }

  return (
    <div>
      <div className='flex items-center flex-col sm:flex-row'>
        <div className='flex-1 w-full'>
          <SearchBox searchChange={onSearchChange} searchfield={search} clearSearch={() => clearInput()} />
        </div>
        <div className='flex text-right'>
          <FilterButtons filterStatus={filterStatus} menuStatus={menuStatus} resetFilter={() => resetFilter()} />
        </div>
      </div>

      <div className='overflow-x-scroll'>
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
              <th scope="col" className="px-6 py-3">

              </th>
              <th scope="col" className="px-6 py-3">

              </th>
            </tr>
          </thead>

          <TableRowData users={duplicateUsers} />

        </table>
      </div>
    </div >

  )
}

export default TableData;


