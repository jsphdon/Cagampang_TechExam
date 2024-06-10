import '../index.css';
import React, { useState, useEffect, useCallback } from 'react';
import SearchBox from './SearchBox';
import TableRowData from './TableRowData';
import FilterButtons from './FilterButtons';
import EndpointsService from "../services/endpoints.service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// SEARCH AND FILTER FUNCTION COMPONENT
const SearchFilterSection = ({ onSearchChange, search, clearInput, filterStatus, menuStatus, resetFilter }) => (
  <div className='flex items-center flex-col sm:flex-row'>
    <div className='flex-1 w-full'>
      <SearchBox searchChange={onSearchChange} searchfield={search} clearSearch={clearInput} />
    </div>
    <div className='flex text-right'>
      <FilterButtons filterStatus={filterStatus} menuStatus={menuStatus} resetFilter={resetFilter} />
    </div>
  </div>
);

// TABLE HEADER COMPONENT
const TableHeader = () => (
  <thead className="text-xs text-black uppercase bg-white border">
    <tr>
      <th scope="col" className="px-6 py-3 border">Name</th>
      <th scope="col" className="px-6 py-3 border">Description</th>
      <th scope="col" className="px-6 py-3 border text-center">Category</th>
      <th scope="col" className="px-6 py-3 border text-center">Status</th>
      <th scope="col" className="px-6 py-3"></th>
      <th scope="col" className="px-6 py-3"></th>
    </tr>
  </thead>
);

// TABLE CONTAINER COMPONENT
const TableContainer = ({ users, deleteRecord }) => (
  <div className='overflow-x-scroll'>
    <table className="w-full text-sm text-left text-white">
      <TableHeader />
      <TableRowData users={users} onDelete={deleteRecord} />
    </table>
  </div>
);

function TableData() {
  const [users, setUsers] = useState([]);
  const [duplicateUsers, setDuplicateUsers] = useState([]);
  const [status, setStatus] = useState(null);
  const [search, setSearch] = useState("");

  const successNotify = () => toast.success('Record DELETED!', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const failNotify = () => toast.error('Something went wrong', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(u => {
        setUsers(u);
        setDuplicateUsers(u);
      })
      .catch(() => failNotify());
  }, []);

  useEffect(() => {
    searchFilter();
  }, [status, search]);

  const onSearchChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  // FUNCTION IN DISPLAYING THE STATUS AND ASSIGNING ITS FUNCTIONALITIES
  const menuStatus = [...new Set(users.map(stat => stat.status))];

  const filterStatus = useCallback((curStat) => {
    setStatus(prevStatus => (prevStatus === null || prevStatus !== curStat ? curStat : null));
  }, []);

  // SEARCH FUNCTION
  const searchFilter = () => {
    let filteredUsers = users;
    if (search) {
      filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (status !== null) {
      filteredUsers = filteredUsers.filter(user => user.status === status);
    }
    setDuplicateUsers(filteredUsers);
  };

  // CLEAR INPUT FUNCTION
  const clearInput = () => setSearch("");

  // RESET FILTER FUNCTION
  const resetFilter = () => setStatus(null);

  // DELETE FUNCTION
  const deleteRecord = async (id) => {
    if (window.confirm("Do you want to delete this record?")) {
      try {
        const res = await EndpointsService.delete(id);
        if (res) {
          successNotify();
          setUsers(users.filter(user => user.id !== id));
          setDuplicateUsers(duplicateUsers.filter(user => user.id !== id));
        }
      } catch (e) {
        failNotify();
        console.error(e);
      }
    }
  };

  return (
    <div>
      <SearchFilterSection
        onSearchChange={onSearchChange}
        search={search}
        clearInput={clearInput}
        filterStatus={filterStatus}
        menuStatus={menuStatus}
        resetFilter={resetFilter}
      />
      <TableContainer users={duplicateUsers} deleteRecord={deleteRecord} />
    </div>
  );
}

export default TableData;
